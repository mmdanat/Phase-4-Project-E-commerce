import React from 'react';
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsPage from "./ProductsPage"
import HomePage from "./HomePage"
import ProductDetails from './ProductDetails';
import ItemsPage from "./ItemsPage"
import CartReview from './CartReview';



function App() {

    const params = useParams();
    const [ productId, setProductId ] = useState({})
    const [products, setProducts] = useState([])
    // eslint-disable-next-line
    const [users, setUsers] = useState([])
    // const params = useParams();

    useEffect(() =>{
        fetch("http://localhost:5555/products")
        .then(resp => resp.json())
        .then(products => setProducts(products))
    },[])
    console.log(products)

    useEffect(() =>{
        fetch("http://localhost:5555/users")
        .then(resp => resp.json())
        .then(users => setUsers(users))
    },[])

    if (products.length > 0){

        return (
        <div className = "body">
        <Routes>
            <Route path = '/home' element = {<HomePage />} />
            <Route path = '/products' element = {<ProductsPage products={products}/> }/>
            <Route path = '/products/:productId' element = {<ProductDetails />} />

        </Routes>
        <ItemsPage products={products}/>
        <CustomerInfo users = {users}/>
        <CartReview products = {products}/>
        {/* <ProductDetails products={products}/> */}
        
        {/* <ProductCollection products={products}/> */}
        </div>
        )
    }
    else{
        return <h1>loading</h1>
    }
}
    

export default App;