import { useState } from "react";
import OrderItem from "./OrderItem";
import ShoppingCart from "./ShoppingCart";

function Order({ id, user_id, order_items, handleClick }) {

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
        />
    )

// ADD BUTTON FOR DELETING ORDER
    return (
        <div>
            <div className="m-5 flex justify-between" >
            <ul>
                <li>Order #: {id}</li>
                <li>Ordered by: {user_id}</li>
            </ul>
            <button id={id} className="mr-2 p-2 rounded text-white bg-black" onClick={handleClick}>Display Items</button>
            <button id={id} className="mr-2 p-2 rounded text-white bg-black" onClick = {() => handleDelete(id)}>Cancel Order</button>
            </div>
            <div className="m-5 flex justify-between" >{showOrderItems ? [renderOrderItems] : ''}</div>
            <ShoppingCart />
        </div>
    )
}

export default Order;