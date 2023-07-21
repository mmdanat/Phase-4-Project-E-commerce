// ADD INPUT FOR UPDATING QUANTITY

import { useState } from "react"

// ADD BUTTON FOR REMOVING ITEM FROM ORDER?
function OrderItem({ id, product_id, quantity, image, product_name }) {

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
        <div className="bg-blue-300/50 rounded-md p-5 m-5 flex" >
            <div className="flex-grow">
                <p>{product_name}</p>
                <div className="w-3/6 overflow-hidden"><img src={image} className="w-1/3 mt-2"></img></div>
            </div>
            <div className="flex">
                <p className="justify-center">Quantity: {updateQuantity}</p>
                <form id={id} className="updateQuantity" onSubmit={submitPatch}>
                    <input type="text" inputMode="numeric" pattern="[0-9]*" className="updateQuantity rounded border p-2 w-14 h-10" name="updateQuantity" placeholder="" />
                    <button type="submit" className="update-quantity p-2 rounded text-white bg-slate-500">
                        <i className="material-icons text-sm">update</i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default OrderItem;