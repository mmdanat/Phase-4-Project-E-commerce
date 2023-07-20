import ProductCard from "./ProductCard"



function ProductCollection({ products,searchTerm}){
   
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
           
            {renderProductsToCards}
        </ul>
    )
}

export default ProductCollection;