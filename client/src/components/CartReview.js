import React, { useEffect, useState } from "react";



function CartReview({}){

    // const [button , setButton] = useState(true)
    
    // const filteredProducts = products.filter((product) =>{
    //     return product.id.includes(users.id) 
    // })

    // const renderProductToCard = filteredProducts.map((product)=>
    // <ItemDetails
    //     key = {product.id}
    //     name = {product.name}
    //     image = {product.price}
    //     price = {product.name}
    //     description = {product.product_description}
    // />)

    // function handleClick(){ //not sure if I need to post to Order as well???

    //     useEffect(() =>{
    //         fetch("http://localhost:5555/order_items",{
    //             method:"POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //         },
    //             body: JSON.stringify({ 
    //                 quantity: quantity, 
    //                 product_id: product_id,
    //                 order_id:order_id })

    //         })
    //         .then(resp => resp.json())
    //         .then(products=> setProducts(products)) //not sure where to set the state 
    //         .then(error=> console.log(error))
    //     })

    // }

    return (

        <div className = "products">
            {/* {renderProductToCard} */}
            {/* <button onClick = {handleClick}>PlaceOrder</button> */}

        </div>
    )



}


export default CartReview;