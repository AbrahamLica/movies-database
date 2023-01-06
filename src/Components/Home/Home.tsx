import { useContext } from "react";
import { Context } from "../../Context/Context";
import React from "react";
import Header from "../Header/Header";
import Items from "../Items/Items";
import Movie from "../Movies/Movie";
import * as C from "../../AppStyles";
import Card from "../Card/Card";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.Container
        width="100%"
        displayFlex
        column 
        alignItems="center"
      >

      <Header></Header>

      <C.Container width="100%">
        {state.movies.homePage && <Card></Card>}
        {state.movies.openPageSelectedCategory && <Items></Items>}
      </C.Container>
      
    </C.Container>
  );
};

export default Home;
