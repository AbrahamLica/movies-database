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
      <C.ContainerItemCard>
        <C.ContainerImgItemCard
          onClick={openLancamentos}
          backgroundImage={avengers}
        ></C.ContainerImgItemCard>

        <C.TextCard onClick={openLancamentos}>Lançamentos</C.TextCard>
      </C.ContainerItemCard>

      <C.ContainerItemCard>
        <C.ContainerImgItemCard
          onClick={openPopulares}
          backgroundImage={avatar}
        ></C.ContainerImgItemCard>

        <C.TextCard onClick={openPopulares}>Populares</C.TextCard>
      </C.ContainerItemCard>

      <C.ContainerItemCard>
        <C.ContainerImgItemCard
          onClick={openMaisVotados}
          backgroundImage={poderoso}
        ></C.ContainerImgItemCard>

        <C.TextCard onClick={openMaisVotados}>Mais Votados</C.TextCard>
      </C.ContainerItemCard>
    </React.Fragment>
  );
};

export default Card;
