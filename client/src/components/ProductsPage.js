import React from 'react';
import ProductCollection from './ProductCollection';
import { useState } from "react";
import Search from './Search';


function ProductsPage({ products }){
   
    const [ searchTerm, setSearchTerm ] = useState("")
   

    function handleSearch(e) {
        e.preventDefault()
        
        setSearchTerm(e.target.searchTerm.value)
    }
   
  


    return (
        <div className='product-page'>
        
            <Search handleSearch={handleSearch} />
            <ProductCollection products={products} searchTerm={searchTerm}  /> 
            
        </div>
    )
}

export default ProductsPage;