import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movies/Movie";
import { GlobalStyle } from "./AppGlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
