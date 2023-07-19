import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails( ) {

    const params = useParams();

    const [ productId, setProductId ] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:3001/movies/${params.productId}`)
            .then(resp=> resp.json())
            .then(productId => setProductId(productId))
    },[])

    return(
        <div className= "container">
            <img src={productId.image} alt={productId.name} />
            <h1>{productId.name}</h1>
            <p><b>Price:</b> {productId.price}</p>
            <p><b>Summary:</b> {productId.product_description}</p>
        </div>
    )
}

export default ProductDetails;