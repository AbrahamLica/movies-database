import React, { ChangeEvent, useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import * as C from "./HeaderStyles";
import logo from "../../imgs/logo.svg";
import glass from "../../imgs/glass.svg";

export const Header = () => {
  const { state, dispatch } = useContext(Context);
  const [movie, setMovie] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {}, []);

  const detectEnter = (e: any) => {
    if (e.key == "Enter" && movie) {
      e.preventDefault();
      searchMovie();
    }
  };

  document.addEventListener("keydown", detectEnter);

  function backToHome() {
    dispatch({
      type: "BACK_HOME",
      payload: {
        openPageSelectedCategory: false,
        homePage: true,
        paginaAtual: 1,
        genreCard: false,
      },
    });

    setMovie("");
  }

  function changeValueInput(e: ChangeEvent<HTMLInputElement>) {
    setMovie(e.target.value);
  }

  async function searchMovie() {
    if (movie == "") {
      alert("Por favor, preencha o campo");
    } else {
      dispatch({
        type: "SEARCH_MOVIE",
        payload: {
          movie: movie,
          homePage: false,
          openPageSelectedCategory: true,
          selectedCategory: movie,
          paginaAtual: 1,
        },
      });
    }
  }

  return (
    <C.MainContainerHeader>
      <C.ContainerHeaderLeft onClick={backToHome}>
        <img src={logo} width="50px" alt="" />
        <C.Text color="white" bold fontSize="25px" margin="0 0 0 10px">
          Movies Library
        </C.Text>
      </C.ContainerHeaderLeft>

      <C.ContainerHeaderRight>
        <C.InputHeaderRight
          onChange={changeValueInput}
          value={movie}
        ></C.InputHeaderRight>

        <C.ContainerGlassImg onClick={searchMovie}>
          <img src={glass} alt="" width="24px" />
        </C.ContainerGlassImg>
      </C.ContainerHeaderRight>
    </C.MainContainerHeader>
  );
};

export default Header;
