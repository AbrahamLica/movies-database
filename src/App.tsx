import React, { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Movie from './Components/Movies/Movie';


function App() {

  return (
    <Fragment>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
