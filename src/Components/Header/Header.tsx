import React from "react";
import * as C from "../../AppStyles";
import logo from "../../imgs/logo.png";
import glass from "../../imgs/glass.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Header = () => {

  const { state, dispatch } = useContext(Context);

  function backToHome() {

    dispatch({
      type: 'BACK_HOME',
      payload: {
        openPageSelectedCategory: false,
        homePage: true,
        paginaAtual: 1
      }
    })
  }

  return (

    <C.Container
      displayFlex
      justifyContent="space-between"
      padding="20px"
      width="90vw"
    >

      <C.Container displayFlex alignItems="center" cursorPointer onClick={backToHome}>
        <img src={logo} alt="" />
        <C.Text color="white" bold>
          Movies Library
        </C.Text>
      </C.Container>

      <C.Container displayFlex alignItems="center">
        <C.Input
          backgroundColor="black"
          color="white"
          margin="0px 10px 0px 0px"
        ></C.Input>

        <C.Container
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
    </C.Container>
    
  );
};

export default Header;
