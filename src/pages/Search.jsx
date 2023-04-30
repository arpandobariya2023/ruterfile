import React from 'react'
import { useState } from "react";


const Search = () => {



    //     const productList = ["blue pant"
    //         , "black pant"
    //         , "blue shirt"
    //         , "black shoes"
    //         , "brown shoes"
    //         , "white pant"
    //         , "white shoes"
    //         , "red shirt"
    //         , "gray pant"
    //         , "white shirt"
    //         , "golden shoes"
    //         , "dark pant"
    //         , "pink shirt"
    //         , "yellow pant"];

    //     const [products, setProducts] = useState(productList);
    //     const [searchVal, setSearchVal] = useState("");
    //     const handleSearchClick = () => {

    //     }


    //     return (
    //         <div>
    //             <h1>
    //                 Search
    //             </h1>
    //             <input type="text" placeholder='Search Your Product' onChange={(f) => setSearchVal(f.target.value)} />
    //             <button type= "button" onClick={handleSearchClick}>Search</button>
    //             {
    //                 products.map((i) =>
    //                     <p>{i}</p>
    //                 )
    //             }

    //         </div>
    //     )



    const data = ['Vivo', 'Oppo', 'Realme', 'Samsung', 'iPhone', 'Lava', 'Sony', 'Nokia', 'Moto', 'Apple', 'Sandisk', 'Fire-Boltt', 'OnePlus', 'Redmi', 'Tecno', 'iQOO'];

    const [Data, setData] = useState(data);
    const [Search, setSearch] = useState("")

    const Type = (e) => {

        const c = e.target.value;

        console.log("Searching Data :-", c);
        setSearch(c);
    }

    const HandlerSearch = () => {

        if (Search === "") {
            setData(data);

            return;
        }

        const searchfilter = data.filter((f) => {
            if (f.toLowerCase().includes(Search.toLowerCase()))

                return f;
        })

        setData(searchfilter);
    }
    return (
        <div className='centerline'>
            

            <div>
                <div>
                    <input placeholder='Enter given character in the table' className='col-2' onChange={Type} />
                    <button onClick={HandlerSearch}>Search</button>
                </div>

                <table className='mt-3'>
                    <thead>
                        <tr>
                            <td>Sr No.</td>
                            <td>Mobile brands</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map((i, index) => {
                                return (
                                    <tr>
                                        <td className='fw-bold'>{index + 1 + '.'}</td>
                                        <td>{i}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search
