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

    const [products, setProducts] = useState([])
    // eslint-disable-next-line
    const [users, setUsers] = useState([])
    // const params = useParams();
    // const [ productId, setProductId ] = useState({})
   
  
    

    useEffect(() =>{
        fetch("http://localhost:5555/products")
        .then(resp => resp.json())
        .then(products => setProducts(products))
    },[])

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
            <Route exact path = '/' element = {<HomePage />} />
            <Route path = '/products' element = {<ProductsPage products={products}/> }/>
            <Route path = '/detail/:productId' element = {<ProductDetails />} />

        </Routes>
        </div>
        )
    }
    else{
        return <h1>loading</h1>
    }
}
    

export default App;