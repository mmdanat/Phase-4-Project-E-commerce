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
        <>
            <NavBar/>
            <div className="flex justify-center "><Search handleSearch={handleSearch} /></div>
            <div className='flex justify-center product-page'>
                <div className='max-w-4xl p-10'><ProductCollection products={products} searchTerm={searchTerm} /></div>
            </div>
        </>
    )
}

export default ProductsPage;