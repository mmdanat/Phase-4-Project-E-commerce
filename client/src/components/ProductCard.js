import React from 'react';

function ProductCard({ name, image, price, id }) {
    return(
        <div>
            <li className = "card">
                <a href={`/detail/${id}`}>
                    <img src={image} alt={name} />
                </a>
                <h4>{name}</h4>
                <p>Price: {price}</p>
            </li>
            {/* <ProductCollection products={products} /> */}
        </div>
    )
}

export default ProductCard;