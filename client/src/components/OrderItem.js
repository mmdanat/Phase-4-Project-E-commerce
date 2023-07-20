// ADD INPUT FOR UPDATING QUANTITY
// ADD BUTTON FOR REMOVING ITEM FROM ORDER?
function OrderItem({ id, product_id, quantity }) {
    return (
        <div className="block">
            <ul>
                <li>Product ID #: {product_id}</li>
                <li>Quantity: {quantity}</li>
            </ul>
        </div>
    )
}

export default OrderItem;