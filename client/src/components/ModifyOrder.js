import { useEffect, useState } from "react";

import OrderDetails from "./OrderDetails";

function ModifyOrder() {
    const [ orders, setOrders ] = useState([])
    const [ orderItems, setOrderItems ] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5555/orders")
        .then(resp => resp.json())
        .then(orders => setOrders(orders))
    },[])

    const mappedOrders = orders.map((order) => (
        <OrderDetails 
            key={order.id}
            id={order.id}
            order_items={order.order_items.product}
            user={order.user_id}
        />
    ))

    useEffect(() => {
        fetch("http://127.0.0.1:5555/order_items")
        .then(resp => resp.json())
        .then(orderItems => setOrderItems(orderItems))
    })

    return (
        <div>
            {mappedOrders}
        </div>
    )
}

export default ModifyOrder;