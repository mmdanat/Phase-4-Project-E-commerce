import { useState } from "react";
import OrderItem from "./OrderItem";

function Order({ id, user_id, order_items, handleClick }) {

    const [ showOrderItems, setShowOrderItems ] = useState(false)

    const [ orderItemsId, setOrderItemsId ] = useState("")

    function handleClick(e) {
        setShowOrderItems((showOrderItems) => !showOrderItems)
        setOrderItemsId((orderItemsId) => e.target.id)
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
        <div className="m-5 block justify-between" >
            <ul>
                <li>Order #: {id}</li>
                <li>Ordered by: {user_id}</li>
            </ul>
            <button id={id} onClick={handleClick}>Display Items</button>
            {showOrderItems ? [renderOrderItems] : ""}
        </div>
    )
}

export default Order;