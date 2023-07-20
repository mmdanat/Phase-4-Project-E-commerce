import React from 'react';

function ProductCard({ name, image, price, id }) {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg auto-cols-auto px-3 py-3 bg-blue-100 m-6 ">
                <a href={`/detail/${id}`}>
                    <img className="w-full" src={image} alt={name} />
                </a>
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{name}</div>
                <p className='text-gray-700 text-base'>Price: ${price}</p>
            </div>
        </div>
    )
}

export default ProductCard;