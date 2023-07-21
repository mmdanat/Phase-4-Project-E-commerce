import { useState } from "react";

import Order from "./Order";
import OrderItem from "./OrderItem";
import Search from "./Search";
import NavBar from "./NavBar";

function ModifyOrder({ orders, order_items }) {

    const [ searchTerm, setSearchTerm ] = useState("none")

    function handleSearch(e) {
        e.preventDefault()

        console.log(e.target.searchTerm.value)
        
        setSearchTerm(e.target.searchTerm.value)
    }


    const filteredOrders = orders.filter((order) => {
        return order.user.email_address.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const renderOrders = filteredOrders.map((order) =>
        <Order 
            key={order.id}
            id={order.id}
            user_name={order.user.name}
            order_items={order_items}
        />
    )

    return (
        <div>
            <NavBar />
            <div className="flex justify-center">
                <div className="flex flex-col w-3/4 ">
                    <div className="flex justify-center">
                        <Search handleSearch={handleSearch} />
                    </div>
                    <div className="flex flex-col justify-center">
                        {renderOrders}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModifyOrder;