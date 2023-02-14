import {React, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductData() {
    
    const {id} = useParams()
    
    const[producto, setProducto] = useState([])

    const getProducto = async () => {
        const result = await axios.get(`http://localhost:5000/api/products/${id}`)
        setProducto(result.data)
    }
    getProducto()

    return ( 
        <div>
            <img src={producto.image} alt={`productoreview${producto._id}`} />
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <button>{producto.price}</button>
        </div>
    );
}

export default ProductData;