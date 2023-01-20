import { useContext } from "react";
import { Context } from "../../Context/Context";
import Header from "../Header/Header";
import * as C from "../../AppStyles";
import Card from "../Card/Card";
import MappedItems from "../Items/MappedItems";

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
      <C.Container
        displayFlex
        justifyContent="space-between"
        width="95%"
        padding="10px"
      >
        <Header></Header>
      </C.Container>


      {state.movies.homePage && (
        <C.Container
          width="94vw"
          displayFlex
          justifyContent="space-between"
          margin="30px"
        >
          <Card></Card>
        </C.Container>
      )}

      <C.Container width="100%">
        {state.movies.openPageSelectedCategory && <MappedItems></MappedItems>}
      </C.Container>


    </C.Container>
  );
};

export default Home;
