import React from "react"
import Header from "../Header/Header";
import Items from "../Items/Items"
import Movie from "../Movies/Movie";
import * as C from '../../AppGlobalStyles'



const Home = () => {

    return (
        <React.Fragment>
            
            <div>
                <Header></Header>
                <Items></Items>
            </div>
        </React.Fragment>


    )
}

export default Home