import React, { ChangeEvent, useState } from "react";
import * as C from "../../AppStyles";
import logo from "../../imgs/logo.png";
import glass from "../../imgs/glass.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import MappedItems from "../Items/MappedItems";

export const Header = () => {
  const { state, dispatch } = useContext(Context);
  const [movie, setMovie] = useState("");
  const navigate = useNavigate();

  function backToHome() {
    dispatch({
      type: "BACK_HOME",
      payload: {
        openPageSelectedCategory: false,
        homePage: true,
        paginaAtual: 1,
      },
    });
  }

  function changeValueInput(e: ChangeEvent<HTMLInputElement>) {
    setMovie(e.target.value);
  }

  async function searchMovie() {
    if (movie == '') {
      alert('Por favor, preencha o campo')
    } else  {
      dispatch({
        type: "SEARCH_MOVIE",
        payload: {
          movie: movie,
          homePage: false,
          openPageSelectedCategory: true,
          selectedCategory: movie,
          paginaAtual: 1
        },
      });
    }
    
  }

  return (
    <React.Fragment>
      <C.Container
        displayFlex
        alignItems="center"
        cursorPointer
        onClick={backToHome}
      >
        <img src={logo} alt="" />
        <C.Text color="white" bold>
          Movies Library
        </C.Text>
      </C.Container>

      <C.Container displayFlex alignItems="center">
        <C.Input
          onChange={changeValueInput}
          value={movie}
          backgroundColor="black"
          color="white"
          margin="0px 10px 0px 0px"
        ></C.Input>

        <C.Container
          onClick={searchMovie}
          backgroundColor="#17C3B2"
          padding="5px"
          borderRadius="5px"
          displayFlex
          alignItems="center"
          justifyContent="center"
          cursorPointer
        >
          <img src={glass} alt="" width="23px" />
        </C.Container>

      </C.Container>
    </React.Fragment>
  );
};

export default Header;
