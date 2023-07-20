import ProductCard from "./ProductCard"
import SearchBar from "./ SearchBar";
import { useState } from "react";


function ProductCollection({ products}){
    const [ searchTerm, setSearchTerm ] = useState("")

    function handleSearch(e) {
        e.preventDefault()
        
        setSearchTerm(e.target.searchTerm.value)
    }
        
    console.log(searchTerm)

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    // console.log(filteredProducts)

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
            <SearchBar handleSearch = {handleSearch}/>
            {renderProductsToCards}
        </ul>
    )
}

export default ProductCollection;