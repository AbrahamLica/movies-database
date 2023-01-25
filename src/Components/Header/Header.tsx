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
    <React.Fragment>
      <C.ContainerHeaderLeft onClick={backToHome}>
        <img src={logo} alt="" />
        <C.Text color="white" bold>
          Movies Library
        </C.Text>
      </C.ContainerHeaderLeft>

      <C.ContainerHeaderRight>
        <C.InputHeaderRight
          onChange={changeValueInput}
          value={movie}
        ></C.InputHeaderRight>

        <C.ContainerGlassImg onClick={searchMovie}>
          <img src={glass} alt="" width="23px" />
        </C.ContainerGlassImg>
      </C.ContainerHeaderRight>
    </React.Fragment>
  );
};

export default Header;
