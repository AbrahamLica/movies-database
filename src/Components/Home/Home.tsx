import React from "react"
import Header from "../Header/Header";
import Items from "../Items/Items"
import Movie from "../Movies/Movie";
import * as C from './AppGlobalStyles'
import { GlobalStyle } from './AppGlobalStyles';


const Home = () => {

    return (
        <React.Fragment>
            <GlobalStyle />
            <div>
                <Header></Header>
                <Items></Items>
                <Movie></Movie>
            </div>
        </React.Fragment>


    )
}

export default Home