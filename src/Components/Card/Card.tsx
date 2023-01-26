import * as C from "../../AppStyles";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import avengers from "../../imgs/avengers.jpeg";
import avatar from "../../imgs/avatar.jpg";
import poderoso from "../../imgs/poderoso.jpg";
import liga from "../../imgs/liga.png";
import { key } from "../Items/MappedItems";
import { GenresType } from "../../Types/Types";

const Card = () => {
  const { state, dispatch } = useContext(Context);
  const [imgGenre, setImgGenre] = useState<any>("");
  const [requisicao, setRequisicao] = useState<GenresType[]>([]);

  function openPopulares() {
    dispatch({
      type: "OPEN_POPULARES",
      payload: {
        openPageSelectedCategory: true,
        homePage: false,
        selectedCategory: "Populares",
      },
    });
  }

  function openLancamentos() {
    dispatch({
      type: "OPEN_LANCAMENTOS",
      payload: {
        openPageSelectedCategory: true,
        homePage: false,
        selectedCategory: "Lançamentos",
      },
    });
  }

  function openMaisVotados() {
    dispatch({
      type: "OPEN_MAISVOTADOS",
      payload: {
        openPageSelectedCategory: true,
        homePage: false,
        selectedCategory: "Mais Votados",
      },
    });
  }

  function openGeneros() {
    dispatch({
      type: "OPEN_GENRES",
      payload: {
        genreCard: true,
      },
    });

    listGenres();
    
  }

  async function listGenres() {
    let req = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=pt-BR`
      // `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=pt-BR&page=${state.movies.paginaAtual}&with_genres=28`
    );
    let json = await req.json();
    setRequisicao(json.genres);
  }

  function ShowimgGenre(item: any) {
    if (item == 'Ação') {
      return `url(${avengers})`;
    } else if(item == 'Aventura'){
      return 'seila'
    }
  }

  return (
    <C.Container>
      {state.movies.genreCard ? (
        <C.ContainerCard>
          {requisicao.map((item, index) => (
            <C.ContainerItemCard>
              <C.ContainerImgItemCard
                backgroundImage={ShowimgGenre(item.name)}
              ></C.ContainerImgItemCard>

              <C.TextCard>{item.name}</C.TextCard>
            </C.ContainerItemCard>
          ))}
        </C.ContainerCard>
      ) : (
        <C.ContainerCard>
          <C.ContainerItemCard>
            <C.ContainerImgItemCard
              onClick={openGeneros}
              backgroundImage={`url(${liga})`}
            ></C.ContainerImgItemCard>

            <C.TextCard onClick={openGeneros}>Gêneros</C.TextCard>
          </C.ContainerItemCard>

          <C.ContainerItemCard>
            <C.ContainerImgItemCard
              onClick={openLancamentos}
              backgroundImage={`url(${avengers})`}
            ></C.ContainerImgItemCard>

            <C.TextCard onClick={openLancamentos}>Lançamentos</C.TextCard>
          </C.ContainerItemCard>

          <C.ContainerItemCard>
            <C.ContainerImgItemCard
              onClick={openPopulares}
              backgroundImage={`url(${avatar})`}
            ></C.ContainerImgItemCard>

            <C.TextCard onClick={openPopulares}>Populares</C.TextCard>
          </C.ContainerItemCard>

          <C.ContainerItemCard>
            <C.ContainerImgItemCard
              onClick={openMaisVotados}
              backgroundImage={`url(${poderoso})`}
            ></C.ContainerImgItemCard>
            <C.TextCard onClick={openMaisVotados}>Mais Votados</C.TextCard>
          </C.ContainerItemCard>
        </C.ContainerCard>
      )}
    </C.Container>
  );
};

export default Card;
