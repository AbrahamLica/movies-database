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
  const [reqTotalPages, setReqTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    executarRequisicao();
    titulo();
  }, [state.movies.paginaAtual, state.movies.movie, title]);

  async function executarRequisicao() {
    if (state.movies.selectedCategory === "Populares") {
      setLoading(true);
      let req = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=${state.movies.paginaAtual}`
      );
      let json = await req.json();
      setRequisicao(json.results);
      setReqTotalPages(json.total_pages);
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
      setReqTotalPages(json.total_pages);
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
      setReqTotalPages(json.total_pages);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(true);
      let req = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=${state.movies.paginaAtual}&query=${state.movies.movie}`
      );
      let json = await req.json();
      setRequisicao(json.results);
      setReqTotalPages(json.total_pages);
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
        dataLançamento: dataLançamento
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

  function titulo() {
    if (
      state.movies.selectedCategory == "Populares" ||
      state.movies.selectedCategory == "Lançamentos" ||
      state.movies.selectedCategory == "Mais Votados"
    ) {
      setTitle(state.movies.selectedCategory);
    } else {
      setTitle(`Mostrando resultados para '${state.movies.selectedCategory}'`);
    }
  }

  return (
    <React.Fragment>
      {loading ? (
        <C.ContainerLoadingAnimation>
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </C.ContainerLoadingAnimation>
      ) : (
        <C.ContainerMainMappedItems>
          <C.TextTitleMappedItems>{title}</C.TextTitleMappedItems>

          <C.ContainerMainItems>
            {!requisicao.length && (
              <C.ContainerErro>
                <C.TextErroMappedItems>
                  {`Ops! Não achamos nenhum resultado para '${state.movies.movie}'`}
                </C.TextErroMappedItems>
              </C.ContainerErro>
            )}

            {requisicao.map((item, index) => (
              <C.ContainerItem key={index}>
                <C.Container>
                  <img
                    src={`${imagePath}${item.poster_path}`}
                    alt=""
                    width={200}
                    height={300}
                  />
                </C.Container>

                <C.ContainerBottomItem>
                  <C.ContainerBottomItemTitle>
                    <C.TextBottomItemTitle>{item.title}</C.TextBottomItemTitle>
                  </C.ContainerBottomItemTitle>

                  <C.ContainerButtonDetalhes>
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
                  </C.ContainerButtonDetalhes>
                </C.ContainerBottomItem>
              </C.ContainerItem>
            ))}

            {reqTotalPages < 20 ? null : (
              <C.ContainerMainNextBack>
                <C.ContainerMainPageAtual>
                  <C.ContainerPageAtual>
                    <C.TextPaginaAtual>
                      {state.movies.paginaAtual}
                    </C.TextPaginaAtual>
                  </C.ContainerPageAtual>
                </C.ContainerMainPageAtual>

                <C.ContainerNextBack>
                  <C.Container displayFlex>
                    <C.Container onClick={voltarPagina} cursorPointer>
                      <img src={back} alt="" width="40px" />
                    </C.Container>

                    <C.Container
                      onClick={passarPagina}
                      cursorPointer
                    >
                      <img src={next} alt="" width="40px" />
                    </C.Container>
                  </C.Container>
                </C.ContainerNextBack>

              </C.ContainerMainNextBack>
            )}
          </C.ContainerMainItems>
        </C.ContainerMainMappedItems>
      )}
    </React.Fragment>
  );
};

export default MappedItems;
