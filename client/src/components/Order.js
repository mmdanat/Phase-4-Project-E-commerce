import { useState } from "react";
import OrderItem from "./OrderItem";
import ShoppingCart from "./ShoppingCart";

function Order({ id, user_name, order_items, handleClick }) {

    const [ showOrderItems, setShowOrderItems ] = useState(false)

    const [ orderItemsId, setOrderItemsId ] = useState("")

    function handleClick(e) {
        setShowOrderItems((showOrderItems) => !showOrderItems)
        setOrderItemsId((orderItemsId) => e.target.id)
    }

    function handleDelete(id) {
        fetch(`http://localhost:5555/orders/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(window.location.reload())
    }

    const filteredOrderItems = order_items.filter((order) => {
        if (order.order.id == orderItemsId)
            return order
    })

    const renderOrderItems = filteredOrderItems.map((order_item) => 
        <OrderItem 
            key={order_item.id}
            id={order_item.id}
            product_id={order_item.product_id}
            quantity={order_item.quantity}
            image={order_item.product.image}
            product_name={order_item.product.name}
        />
    )

    return (
        <div className="m-2 flex flex-col bg-blue-200/50 rounded-md w-auto p-2">
            <div className="m-5 flex" >
                <ul className="flex-grow">
                    <li>Order #: {id}</li>
                    <li>{user_name}</li>
                </ul>
                <button id={id} className="mr-2 p-2 rounded text-white bg-slate-500" onClick={handleClick}>Display Items</button>
                <button id={id} className="mr-2 p-2 rounded text-white bg-slate-500" onClick = {() => handleDelete(id)}>Cancel Order</button>
            </div>
            <div>
                {showOrderItems ? [renderOrderItems] : <></>}
            </div>
            <ShoppingCart />
        </div>
    )
}

export default Order;