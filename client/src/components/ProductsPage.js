import React from 'react';
// import ProductCard from "./ProductCard";
import ProductCollection from './ProductCollection';
// import { useState } from "react";
// import SearchBar from './Search';


function ProductsPage({products}){

   
    return (
        <div className='product-page'>
            {/* <Search handleSearch={handleSearch} /> */}
             <ProductCollection products={products} /*searchTerm={searchTerm} *//> 
        </div>
    )
}

export default ProductsPage;