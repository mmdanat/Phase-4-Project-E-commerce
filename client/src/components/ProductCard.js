import React from 'react';
import { useState } from "react";

function ProductCard({ name, image, price, id }) {
    const [cart, setCart] = useState(0)
    
    return(
        <div>
            <li className = "card">
                <a href={`/detail/${id}`}>
                    <img src={image} alt={name} />
                </a>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <h1>cart quantity: {cart}</h1>
                <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
            </li>
        </div>
    )
}

export default ProductCard;