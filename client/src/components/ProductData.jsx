import React from "react";
import { useParams } from "react-router-dom";
import {Products} from "./Products";


function ProductData({products}) {

    const {id} = useParams()


    return ( 
        <div>
            <img src={products.image} alt={`productoreview${products.title}`} />
            <h2>{products.title}</h2>
            <p>{products.description}</p>
            <button>{products.price}</button>
        </div>
     );
}

export default ProductData;