import React, { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movies/Movie";
import { GlobalStyle } from "./AppGlobalStyles";
import Header from "./Components/Header/Header";
import MovieSearched from "./Components/MovieSearched/MovieSearched";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/:slug" element={<MovieSearched />} /> 
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
