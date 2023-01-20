import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import * as C from "../../AppStyles";
import { RequisicaoType } from "../../Types/Types";
import { useNavigate } from "react-router-dom";
import next from "../../imgs/next.svg";
import back from "../../imgs/back.svg";
import "./index.css";

export const key: string = "7c41526b8e248796d7b1e264a1e5730d";
export const imagePath: string = "https://image.tmdb.org/t/p/w300/";

const MappedItems = () => {
  const { state, dispatch } = useContext(Context);
  const [requisicao, setRequisicao] = useState<RequisicaoType[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      executarRequisicao();
  }, [state.movies.paginaAtual]);

  async function executarRequisicao() {
    if (state.movies.selectedCategory === "Populares") {
      setLoading(true);
      let req = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=${state.movies.paginaAtual}`
      );
      let json = await req.json();
      setRequisicao(json.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else if (state.movies.selectedCategory === "Lançamentos") {
      setLoading(true);
      let req = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=pt-BR&page=${state.movies.paginaAtual}`
      );
      let json = await req.json();
      setRequisicao(json.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else if (state.movies.selectedCategory === "Mais Votados") {
      setLoading(true);
      let req = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=${state.movies.paginaAtual}`
      );
      let json = await req.json();
      setRequisicao(json.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  function abreDetalhes(
    id: any,
    titulo: string | undefined,
    detalhes: string | undefined,
    img: any,
    mediaVotos: number | undefined,
    dataLançamento: string | undefined
  ) {
    dispatch({
      type: "OPEN_DETAILS",
      payload: {
        id: id,
        titulo: titulo,
        detalhes: detalhes,
        movieOpen: true,
        img: img,
        mediaVotos: mediaVotos,
        dataLançamento: dataLançamento,
        paginaAtual: "1",
      },
    });

    navigate("/movie");
  }

  function voltarPagina() {
    if (state.movies.paginaAtual == 1) {
    } else {
      dispatch({
        type: "BACK_PAGE",
        payload: {
          paginaAtual: state.movies.paginaAtual - 1,
        },
      });
      executarRequisicao();
    }
  }

  function passarPagina() {
    dispatch({
      type: "NEXT_PAGE",
      payload: {
        paginaAtual: state.movies.paginaAtual + 1,
      },
    });
    executarRequisicao();
  }

  return (

    <React.Fragment>
      {loading  ? (
        <C.Container
          displayFlex
          alignItems="center"
          justifyContent="center"
          heigth="80vh"
          width="100vw"
        >
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </C.Container>
      ) : ( null)}
        
       
        <C.Container
          displayFlex
          column
          alignItems="center"
          width="100%"
        >
          <C.Text color="white" bold textAlign="center" fontSize="40px">
            {state.movies.selectedCategory}
          </C.Text>

          <C.Container
            displayFlex
            flexWrap
            alignItems="center"
            justifyContent="center"
          >
            {requisicao.map((item, index) => (
              <C.Container
                width="222px"
                heigth="450px"
                displayFlex
                column
                padding="30px"
                margin="10px"
                key={index}
              >
                <C.Container>
                  <img
                    src={`${imagePath}${item.poster_path}`}
                    alt=""
                    width={200}
                    height={300}
                  />
                </C.Container>

                <C.Container width="90%" displayFlex column flex="1">
                  <C.Container
                    displayFlex
                    column
                    flex="1"
                    alignItems="flex-start"
                  >
                    <C.Text color="white" bold fontSize="18px" id="teste">
                      {item.title}
                    </C.Text>
                  </C.Container>

                  <C.Container displayFlex justifyContent="center">
                    <C.Button
                      onClick={() =>
                        abreDetalhes(
                          item.id,
                          item.title,
                          item.overview,
                          item.poster_path,
                          item.vote_average,
                          item.release_date
                        )
                      }
                    >
                      Detalhes
                    </C.Button>
                  </C.Container>
                </C.Container>
              </C.Container>
            ))}

            <C.Container displayFlex width="100%" padding="10px">
              <C.Container width="50%" displayFlex justifyContent="flex-end">
                <C.Container
                  borderRadius="50%"
                  border="1px solid #17c3b2"
                  displayFlex
                  alignItems="center"
                  justifyContent="center"
                  width="30px"
                  heigth="30px"
                  padding="5px"
                >
                  <C.Text fontSize="25px" color="white" bold textAlign="center">
                    {state.movies.paginaAtual}
                  </C.Text>
                </C.Container>
              </C.Container>

              <C.Container displayFlex justifyContent="flex-end" width="50%">
                <C.Container displayFlex>
                  <C.Container onClick={voltarPagina} cursorPointer>
                    <img src={back} alt="" width="40px" />
                  </C.Container>

                  <C.Container
                    onClick={passarPagina}
                    cursorPointer
                    margin="0 30px"
                  >
                    <img src={next} alt="" width="40px" />
                  </C.Container>
                </C.Container>
              </C.Container>
            </C.Container>
          </C.Container>
        </C.Container>
      
    </React.Fragment>

  );
};

export default MappedItems;
