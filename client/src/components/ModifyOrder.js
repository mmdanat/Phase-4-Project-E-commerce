import { useState } from "react";

import Order from "./Order";
import OrderItem from "./OrderItem";
import Search from "./Search";

function ModifyOrder({ orders, order_items }) {

    const [ searchTerm, setSearchTerm ] = useState("none")

    function handleSearch(e) {
        e.preventDefault()
        
        setSearchTerm(e.target.searchTerm.value)
    }

    const filteredOrders = orders.filter((order) => {
        return order.user.email_address.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const renderOrders = filteredOrders.map((order) =>
        <Order 
            key={order.id}
            id={order.id}
            user_id={order.user.name}
            order_items={order_items}
        />
    )

    return (
        <div>
            <Search handleSearch={handleSearch} />
            <div>{renderOrders}</div>
            {/* <div>{renderOrderItems}</div> */}
        </div>
    )
}

export default ModifyOrder;