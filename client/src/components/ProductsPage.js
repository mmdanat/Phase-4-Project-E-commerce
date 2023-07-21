import React from 'react';
import ProductCollection from './ProductCollection';
import { useState } from "react";
import Search from './Search';
import NavBar from './NavBar';

function ProductsPage({ products }){
   
    const [ searchTerm, setSearchTerm ] = useState("")
   
    function handleSearch(e) {
        e.preventDefault()
        
        setSearchTerm(e.target.searchTerm.value)
    }
   
    return (
        <div className='product-page bg-green-900'>
            <NavBar/>
            <Search handleSearch={handleSearch} />
            <ProductCollection products={products} searchTerm={searchTerm} /> 
        </div>
    )
}

export default ProductsPage;