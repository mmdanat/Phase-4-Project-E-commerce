
function OrderDetails({ id, order_items, user }) {
    return (
        <div>
            <p>{id}</p>
            <p>{order_items}</p>
            <p>{user}</p>
        </div>
    )
}

export default OrderDetails;