import React from 'react';
import { useEffect, useState } from "react";
import ModifyOrder from './ModifyOrder';

function App() {
    const [ products, setProducts ] = useState([])
    const [ users, setUsers ] = useState([])

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
            <ModifyOrder />
        </div>
    )
}

export default App;