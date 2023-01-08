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
        selectedCategory: "populares",
      },
    });
  }

  function openLancamentos() {
    dispatch({
      type: "OPEN_EM-CARTAZ",
      payload: {
        openPageSelectedCategory: true,
        homePage: false,
        selectedCategory: "em-cartaz",
      },
    });
  }

  function openMaisVotados() {
    dispatch({
      type: "OPEN_MAISVOTADOS",
      payload: {
        openPageSelectedCategory: true,
        homePage: false,
        selectedCategory: "maisvotados",
      },
    });
  }

  return (

    <React.Fragment>
      <C.Container>
        <C.Container
          onClick={openLancamentos}
          width="200px"
          heigth="200px"
          displayFlex
          alignItems="flex-end"
          justifyContent="center"
          borderRadius="20px"
          margin="0 5px"
          cursorPointer
          backgroundImage={avengers}
          backgroundSize="cover"
          backgroundPosition="center"
        ></C.Container>

        <C.Text
          onClick={openLancamentos}
          cursorPointer
          textAlign="center"
          bold
          color="black"
          fontSize="25px"
          padding="6px"
          borderRadius="10px"
          backgroundColor="#17c3b2"
        >
          Lançamentos
        </C.Text>
      </C.Container>

      <C.Container>
        <C.Container
          onClick={openPopulares}
          width="200px"
          heigth="200px"
          displayFlex
          alignItems="flex-end"
          justifyContent="center"
          borderRadius="20px"
          margin="0 5px"
          cursorPointer
          backgroundImage={avatar}
          backgroundSize="cover"
          backgroundPosition="center"
        ></C.Container>

        <C.Text
          cursorPointer
          textAlign="center"
          bold
          color="black"
          fontSize="25px"
          padding="6px"
          borderRadius="10px"
          backgroundColor="#17c3b2"
          onClick={openPopulares}
        >
          Populares
        </C.Text>
      </C.Container>

      <C.Container>
        <C.Container
          onClick={openMaisVotados}
          width="200px"
          heigth="200px"
          displayFlex
          alignItems="flex-end"
          justifyContent="center"
          borderRadius="20px"
          margin="0 5px"
          cursorPointer
          backgroundImage={poderoso}
          backgroundSize="cover"
          backgroundPosition="center"
        ></C.Container>

        <C.Text
          onClick={openMaisVotados}
          cursorPointer
          textAlign="center"
          bold
          color="black"
          fontSize="25px"
          padding="6px"
          borderRadius="10px"
          backgroundColor="#17c3b2"
        >
          Mais Votados
        </C.Text>
      </C.Container>
    </React.Fragment>
  );
};

export default Card;
