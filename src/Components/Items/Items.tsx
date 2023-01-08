import React, { useEffect, useState } from "react";
import * as C from "../../AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import next from '../../imgs/next.svg'
import back from '../../imgs/back.svg'

const Items = () => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const [requisicao, setRequisicao] = useState<RequisicaoType[]>([]);
  const key: string = "7c41526b8e248796d7b1e264a1e5730d";
  const imagePath: string = "https://image.tmdb.org/t/p/w300/";
  const [numberPage, setNumberPage] = useState(1);
  const [categoriaTitulo, setCategoriaTitulo] = useState('')

  useEffect(() => {
    executarRequisicao();
  }, [numberPage]);

  type RequisicaoType = {
    id?: number;
    title?: string;
    overview?: string;
    popularity?: number;
    vote_average?: number;
    poster_path?: string;
    release_date?: string;
  };

  async function executarRequisicao() {
    if (state.movies.selectedCategory == "populares") {
      var req = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=${numberPage}`
      );
      var json = await req.json();
      setRequisicao(json.results);
      setCategoriaTitulo('Populares')
    } else if (state.movies.selectedCategory == "em-cartaz") {
      var req = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=pt-BR&page=${numberPage}`
      );
      var json = await req.json();
      setRequisicao(json.results);
      setCategoriaTitulo('Em Cartaz')
    } else if (state.movies.selectedCategory == "maisvotados") {
      var req = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=${numberPage}`
      );
      var json = await req.json();
      setRequisicao(json.results);
      setCategoriaTitulo('Mais Votados')
    }
  }

  function voltarPagina() {
    if (numberPage == 1) {

    } else {
      setNumberPage(numberPage - 1);
      executarRequisicao();
    }

  }

  function passarPagina() {
    setNumberPage(numberPage + 1);
    executarRequisicao();
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
      },
    });

    navigate("/movie");
  }

  return (
    <C.Container
      displayFlex
      column
      alignItems="center"
    >
      <C.Container
        width="80%"
        displayFlex
        alignItems="center"
        justifyContent="center"
      >
        <C.Text color="white" bold textAlign="center" fontSize="40px">
          {categoriaTitulo}
        </C.Text>
      </C.Container>

      <C.Container
        width="90%"
        backgroundColor="black"
        displayFlex
        flexWrap
        alignItems="center"
        justifyContent="center"
        margin="auto"
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
              <C.Container displayFlex column flex="1" alignItems="flex-start">
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
      </C.Container>

      <C.Container
        width="100%"
        displayFlex
        alignItems="center"
        justifyContent="center"
      >
        <C.Container
          border="1px solid white"
          displayFlex
          alignItems="center"
          justifyContent="center"
          alignContent="flex-end"
          width="30px"
          heigth="30px"
          padding="5px"
        >
          <C.Text
            fontSize="25px"
            color="white"
            bold
            textAlign="center"
          >
            {numberPage}
          </C.Text>
        </C.Container>

        <C.Container displayFlex justifyContent="flex-end" width="100%">
          <C.Container onClick={voltarPagina} cursorPointer>
            <img src={back} alt="" width='40px' />
          </C.Container>

          <C.Container onClick={passarPagina} cursorPointer margin="0 30px">
            <img src={next} alt="" width='40px' />
          </C.Container>
        </C.Container>
        
      </C.Container>



    </C.Container>
  );
};

export default Items;
