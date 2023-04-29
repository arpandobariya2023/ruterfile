import React from 'react'

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

  return (
    <div>
        <h1>
            Search
        </h1>
        <input type="text" placeholder='Search Your Product'/>
        <button>Search</button>
        {
            productList.map((i)=>
                <p>{i}</p>
            )
        }
      
    </div>
  )
}

export default Search
