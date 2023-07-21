import React from 'react';
import { useState } from "react";

function ProductCard({ name, image, price, id }) {
    const [cart, setCart] = useState(0)
    
    return(
        <a href={`/detail/${id}`}>
            <div className="w-80 rounded overflow-hidden shadow-lg auto-cols-auto bg-blue-200/50 m-6 ">
                <div className='container h-52 flex items-center overflow-hidden'>
                    <div className=''><img className="" src={image} alt={name} /></div>
                </div>
                <div className='p-4'>
                    <div className='font-bold text-xl mb-2'>{name}</div>
                    <p className='text-gray-700 text-base'>Price: ${price}</p>
                    {/* <h1>cart quantity: {cart}</h1>
                    <button onClick={() => setCart(cart + 1)}>Add to Cart</button> */}
                </div>
            </div>
        </a>
    )
}

export default ProductCard;