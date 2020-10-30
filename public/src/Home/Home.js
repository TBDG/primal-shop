import React from 'react';
import http from "../services/http";
import {useSelector} from "react-redux";


function Home() {

    let categories = useSelector(state => state.categories)

    // I'm fairly certain this is a very bad pattern but I don't have time right now to get it figured out solid
    if (categories.length === 0) {
        http.getShopCategories();
    }
    console.log(categories);

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
