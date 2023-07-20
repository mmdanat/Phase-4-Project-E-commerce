import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsPage from "./ProductsPage"
import HomePage from "./HomePage"
import ProductDetails from './ProductDetails';
import CartReview from './CartReview';
import CustomerInfo from './CustomerInfo';
import NavBar from './NavBar';





function App() {

    // const params = useParams();
    // const [ productId, setProductId ] = useState({})
    const [products, setProducts] = useState([]) 
    const [users, setUsers] = useState([])
  
    

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

    const addUser = (user) => {
        setUsers(users => [...users,user])
    }

    if (products.length > 0){

        return (
        <div className = "body">
        <NavBar/>
        
        <Routes>
            <Route path = '/home' element = {<HomePage />} />
            <Route path = '/products' element = {<ProductsPage products={products} /> }/>
            <Route path = '/products/:productId' element = {<ProductDetails />} />
            <Route path = '/customer' element = {<CustomerInfo addUser = {addUser} />} />

        </Routes>
       
        {/* <CustomerInfo users = {users}/> */}
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