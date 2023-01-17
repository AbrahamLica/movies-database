import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as C from "../../AppStyles";
import { RequisicaoType } from "../../Types/Types";
import Header from "../Header/Header";
import { key } from "../Items/MappedItems";

const MovieSearched = () => {
  const [requisicao, setRequisicao] = useState<RequisicaoType[]>([]);
  const imagePath: string = "https://image.tmdb.org/t/p/w300/";
  const params = useParams();

  useEffect(() => {
    searchMovie();
  }, []);

  async function searchMovie() {
    var req = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${params.slug}`
    );
    var json = await req.json();
    setRequisicao(json.results);
  }

  return (
    <C.Container
      displayFlex
      column
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Header></Header>
      <C.Text color="white" bold>Mostrando resultados para {params.slug}</C.Text>

      <C.Container displayFlex flexWrap width="90%">
        <React.Fragment>
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
                  <C.Button>Detalhes</C.Button>
                </C.Container>
              </C.Container>
            </C.Container>
          ))}
        </React.Fragment>
      </C.Container>
    </C.Container>
  );
};

export default MovieSearched;
