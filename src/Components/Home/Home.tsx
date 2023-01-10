import { useContext } from "react";
import { Context } from "../../Context/Context";
import Header from "../Header/Header";
import Items from "../Items/Items";
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
      justifyContent="center"
    >
      <C.Container width="100%">
        <Header></Header>
      </C.Container>

      {state.movies.homePage && (
        <C.Container
          width="90vw"
          displayFlex
          justifyContent="space-between"
          margin="30px"
        >
          <Card></Card>
        </C.Container>
      )}

      {state.movies.openPageSelectedCategory && <Items></Items>}
    </C.Container>
  );
};

export default Home;
