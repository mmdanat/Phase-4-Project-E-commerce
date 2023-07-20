// ADD INPUT FOR UPDATING QUANTITY

import { useState } from "react"

// ADD BUTTON FOR REMOVING ITEM FROM ORDER?
function OrderItem({ id, product_id, quantity }) {

    const [ updateQuantity, setUpdateQunatity ] = useState(quantity)

    const [ updateProductId, setUpdateProductId ] = useState("")

    // function handleClick(e) {
    //     e.preventDefault()
    //     console.log(e.target.updateQuantity.value)
    //     console.log(e.target.id)
    //     setUpdateProductId(e.target.id)
    //     setUpdateQunatity(e.target.updateQuantity.value)
    //     submitPatch(updateQuantity, updateProductId)
    // }

    // function handlePatch(e) {
    //     e.preventDefault()
    //     console.log(e)
    //     setUpdateQunatity(e.target.updateQuantity.value)
    // }

    function submitPatch(e) {
        e.preventDefault()
        fetch(`http://localhost:5555/order_items/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    quantity: parseInt(e.target.updateQuantity.value)
                }
            )
        })
        .then(resp => resp.json())
        .then(setUpdateQunatity(e.target.updateQuantity.value))
    }

    return (
        <div className="flex">
            <ul>
                <li>Product ID #: {product_id}</li>
                <li>Quantity: {updateQuantity}</li>
            </ul>
            <form id={id} className="updateQuantity" onSubmit={submitPatch}>
                <input type="text" inputMode="numeric" pattern="[0-9]*" className="updateQuantity rounded border p-2 w-14" name="updateQuantity" placeholder="" />
            <button type="submit" className="update-quantity p-2 rounded text-white bg-black">
                <i className="material-icons">update quantity</i>
            </button>
            </form>
        </div>
    )
}

export default OrderItem;