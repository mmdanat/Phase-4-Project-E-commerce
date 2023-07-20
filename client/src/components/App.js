import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsPage from "./ProductsPage"
import HomePage from "./HomePage"
import ProductDetails from './ProductDetails';
import ModifyOrder from './ModifyOrder'
import CartReview from './CartReview';
import CustomerInfo from './CustomerInfo';
import NavBar from './NavBar';

function App() {

    const [products, setProducts] = useState([])
    // eslint-disable-next-line
    const [users, setUsers] = useState([])
    // const params = useParams();
    const [ orders, setOrders ] = useState([])

    const [ order_items, setOrderItems ] = useState([])
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

    useEffect(() => {
        fetch('http://localhost:5555/orders')
        .then(resp => resp.json())
        .then(orders => setOrders(orders))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5555/order_items')
        .then(resp => resp.json())
        .then(order_items => setOrderItems(order_items))
    },[])

    if (products.length > 0){

        return (
        <div className = "body">
        <NavBar/>
        
        <Routes>
            <Route path = '/' element = {<HomePage />} />
            <Route path = '/products' element = {<ProductsPage products={products}/> }/>
            <Route path = '/detail/:productId' element = {<ProductDetails />} />
            <Route path = '/orders' element = {<ModifyOrder orders={orders} order_items={order_items} />} />
        </Routes>
        </div>
        )
    }
    else{
        return <h1>loading</h1>
    }
}
    

export default App;