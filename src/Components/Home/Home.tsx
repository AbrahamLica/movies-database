import React from "react"
import Header from "../Header/Header";
import Items from "../Items/Items"
import * as C from './AppGlobalStyles'
import { GlobalStyle } from './AppGlobalStyles';


const Home = () => {

    return (
        <React.Fragment>
            <GlobalStyle />
            <div>
                <Header></Header>
                <Items></Items>
            </div>
        </React.Fragment>


    )
}

export default Home