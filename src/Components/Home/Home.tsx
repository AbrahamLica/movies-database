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
      <Header></Header>

      {state.movies.homePage && (
        <C.Container
          width="100%"
          displayFlex
          justifyContent="space-between"
          margin="30px"
        >
          <Card></Card>
        </C.Container>
      )}

      {state.movies.openPageSelectedCategory && <MappedItems></MappedItems>}
      
    </C.Container>
  );
};

export default Home;
