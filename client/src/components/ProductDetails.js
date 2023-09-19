import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import AddToCart from "./AddToCart";

function ProductDetails( ) {

    const params = useParams();

    const [ productId, setProductId ] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5555/products/${params.productId}`)
            .then(resp=> resp.json())
            .then(productId => setProductId(productId))
    }, [params.productId])

    return(
        <div>
        <NavBar/>
        
        <div className="max-w-5xl rounded overflow-hidden shadow-lg auto-cols-auto px-3 py-3 bg-blue-100 m-6 center ">
                <div className= "">
                <img  className="w-full" src={productId.image} alt={productId.name} />
                <div className='px-6 py-4'>
                    <div className="font-bold text-xl mb-2"><h1>{productId.name}</h1></div>
                    <p class="text-gray-700 text-base"><b>Summary:</b> {productId.product_description}</p>
                    <p className="text-gray-700 text-base bold"><b>Price: $</b> {productId.price}</p>
            </div>
            <AddToCart />
            </div>
        </div>
        </div>
    )
}

export default ProductDetails;