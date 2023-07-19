import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";
import ItemsPage from "./ItemsPage"



function App() {
    const [products, setProducts] =useState([])
    const [users,setUsers] =useState([])

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



    return (
    <div className = "body">

      <ItemsPage products={products}/>
      <CustomerInfo users = {users}/>
      {/* <Routes>
         <Route exact path = '/' element = {<M />} />
         <Route path = '/' element = { <M/> } />
         <Route path = '/' element = { <M /> } />
      </Routes> */}
    </div>
    )
}

export default App;