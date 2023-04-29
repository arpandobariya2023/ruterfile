import React from 'react'
import { useState } from "react";


const Search = () => {
    const productList = ["blue pant"
        , "black pant"
        , "blue shirt"
        , "black shoes"
        , "brown shoes"
        , "white pant"
        , "white shoes"
        , "red shirt"
        , "gray pant"
        , "white shirt"
        , "golden shoes"
        , "dark pant"
        , "pink shirt"
        , "yellow pant"];

    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");
    const handleSearchClick = () => {
        
    }


    return (
        <div>
            <h1>
                Search
            </h1>
            <input type="text" placeholder='Search Your Product' onChange={(f) => setSearchVal(f.target.value)} />
            <button type= "button" onClick={handleSearchClick}>Search</button>
            {
                products.map((i) =>
                    <p>{i}</p>
                )
            }

        </div>
    )
}

export default Search
