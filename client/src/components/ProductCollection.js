import ProductCard from "./ProductCard"
import Search from "./Search";
import { useState } from "react";


function ProductCollection({ products}){
    const [ searchTerm, setSearchTerm ] = useState("")

    function handleSearch(e) {
        e.preventDefault()
        
        setSearchTerm(e.target.searchTerm.value)
    }
        
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
   
    const renderProductsToCards = filteredProducts.map((product)=>
        <ProductCard
            key = {product.id}
            id = {product.id}
            name = {product.name}
            image = {product.image}
            price = {product.price}
        />
    )
    
    return(
        <ul className = "cards">
            {/* <Search handleSearch = {handleSearch}/> */}
            {renderProductsToCards}
        </ul>
    )
}

export default ProductCollection;