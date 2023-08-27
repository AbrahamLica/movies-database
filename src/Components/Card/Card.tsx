import * as C from "./CardStyles";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import {
  avengers,
  avatar,
  poderoso,
  liga,
  acao,
  animacao,
  aventura,
  cinema,
  comedia,
  crime,
  documentarios,
  drama,
  familia,
  fantasia,
  faroeste,
  ficcao,
  guerra,
  historia,
  misterio,
  musica,
  romance,
  terror,
  thriler,
} from "./index";
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
    );
    let json = await req.json();
    setRequisicao(json.genres);
  }

  function openGenreList(id: any) {
    dispatch({
      type: "OPEN_GENRE_LIST",
      payload: {
        openPageSelectedCategory: true,
        homePage: false,
        selectedCategory: id,
      },
    });

    console.log(state.movies.selectedCategory);
  }

  function ShowimgGenre(item: any) {
    if (item == "Ação") {
      return `url(${acao})`;
    } else if (item == "Aventura") {
      return `url(${aventura})`;
    } else if (item == "Animação") {
      return `url(${animacao})`;
    } else if (item == "Comédia") {
      return `url(${comedia})`;
    } else if (item == "Crime") {
      return `url(${crime})`;
    } else if (item == "Documentário") {
      return `url(${documentarios})`;
    } else if (item == "Drama") {
      return `url(${drama})`;
    } else if (item == "Família") {
      return `url(${familia})`;
    } else if (item == "Fantasia") {
      return `url(${fantasia})`;
    } else if (item == "História") {
      return `url(${historia})`;
    } else if (item == "Terror") {
      return `url(${terror})`;
    } else if (item == "Música") {
      return `url(${musica})`;
    } else if (item == "Mistério") {
      return `url(${misterio})`;
    } else if (item == "Romance") {
      return `url(${romance})`;
    } else if (item == "Ficção científica") {
      return `url(${ficcao})`;
    } else if (item == "Cinema TV") {
      return `url(${cinema})`;
    } else if (item == "Thriller") {
      return `url(${thriler})`;
    } else if (item == "Guerra") {
      return `url(${guerra})`;
    } else if (item == "Faroeste") {
      return `url(${faroeste})`;
    }
  }

  return (
    <C.Container width="100%" displayFlex column alignItems="center">
      {state.movies.genreCard ? (
        <C.ContainerCard>
          {requisicao.map((item, index) => (
            <C.ContainerItemCard>
              <C.ContainerImgItemCard
                backgroundImage={ShowimgGenre(item.name)}
                onClick={() => openGenreList(item.id)}
              ></C.ContainerImgItemCard>

              <C.TextCard onClick={() => openGenreList(item.id)}>
                {item.name}
              </C.TextCard>
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
