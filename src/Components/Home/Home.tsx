import React from "react"
import Items from "../Items/Items"
import * as C from './AppStyles'
import { GlobalStyle } from './AppStyles';


const Home = () => {

    return (
        <React.Fragment>
            <GlobalStyle />
            <div>
                <Items></Items>
            </div>
        </React.Fragment>


    )
}

export default Home