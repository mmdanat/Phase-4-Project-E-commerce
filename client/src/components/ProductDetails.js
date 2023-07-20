import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails( ) {

    const params = useParams();

    const [ productId, setProductId ] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5555/products/${params.productId}`)
            .then(resp=> resp.json())
            .then(productId => setProductId(productId))
    }, [params.productId])

    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className= "container">
            <img src={productId.image} alt={productId.name} />
            <h1>{productId.name}</h1>
            <p><b>Price:</b> {productId.price}</p>
            <p><b>Summary:</b> {productId.product_description}</p>
        </div>
        </div>
    )
}

export default ProductDetails;