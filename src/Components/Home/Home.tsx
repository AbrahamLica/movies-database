import { useContext } from "react";
import { Context } from "../../Context/Context";
import Header from "../Header/Header";
import * as C from "./HomeStyles";
import Card from "../Card/Card";
import MappedItems from "../Items/MappedItems";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.ContainerMainHome>
      <C.ContainerHeader>
        <Header></Header>
      </C.ContainerHeader>

      {state.movies.homePage && <Card></Card>}

      <C.Container width="100%">
        {state.movies.openPageSelectedCategory && <MappedItems></MappedItems>}
      </C.Container>
    </C.ContainerMainHome>
  );
};

export default Home;
