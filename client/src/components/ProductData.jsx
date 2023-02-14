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
        <div className="pb-10 px-10">
            <h2 className="text-3xl	font-bold">{producto.title}</h2>
            <div className="shadow-md flex mt-6 rounded-2xl w-4/5 bg-white">
                <div className="grid place-items-center">
                    <img className="rounded-2xl h-96 p-4" src={producto.image} alt={`productoreview${producto._id}`} />
                </div>

                <div className="grid place-items-center w-2/4 pl-10 ">
                        <div>
                        <p className="">{producto.description}</p>
                        
                        <button className="block my-4 px-3 py-1 bg-neutral-800 text-white rounded-2xl">${producto.price}</button>
                        
                        </div> 
                </div>
            </div>
        </div>
    );
}

export default ProductData;