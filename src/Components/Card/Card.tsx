import * as C from "../../AppStyles";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import avengers from "../../imgs/avengers.jpeg";
import avatar from "../../imgs/avatar.jpg";
import poderoso from "../../imgs/poderoso.jpg";

const Card = () => {
  const { state, dispatch } = useContext(Context);

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

  return (
    <React.Fragment>
      <C.Container>
        <C.ContainerCard
          onClick={openLancamentos}
          backgroundImage={avengers}
        ></C.ContainerCard>

        <C.TextCard onClick={openLancamentos}>Lançamentos</C.TextCard>
      </C.Container>

      <C.Container>
        <C.ContainerCard
          onClick={openPopulares}
          backgroundImage={avatar}
        ></C.ContainerCard>

        <C.TextCard onClick={openPopulares}>Populares</C.TextCard>
      </C.Container>

      <C.Container>
        <C.ContainerCard
          onClick={openMaisVotados}
          backgroundImage={poderoso}
        ></C.ContainerCard>

        <C.TextCard onClick={openMaisVotados}>Mais Votados</C.TextCard>
      </C.Container>
    </React.Fragment>
  );
};

export default Card;
