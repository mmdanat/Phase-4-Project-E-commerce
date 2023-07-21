import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function ProductDetails( ) {

    const params = useParams();

    const [ productId, setProductId ] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5555/products/${params.productId}`)
            .then(resp=> resp.json())
            .then(productId => setProductId(productId))
    }, [params.productId])

    return(
        <div >
            <NavBar/>
            <div className="flex justify-center">
                <div className="max-w-3xl rounded overflow-hidden shadow-lg bg-blue-200/50 m-6 center ">
                    <div className= "flex">
                        <img  className="w-auto h-96" src={productId.image} alt={productId.name} />
                        <div className='px-6 py-4'>
                            <div className="font-bold text-xl mb-2"><h1>{productId.name}</h1></div>
                            <p class="text-gray-700 text-base"><b>Summary:</b> {productId.product_description}</p>
                            <p className="text-gray-700 text-base bold"><b>Price: $</b> {productId.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;