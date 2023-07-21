import { useState } from "react";
import { Link } from "react-router-dom";

function AddToCart(){

    const [cartItems, setCartItems] = useState([])

    function handleClick(e){
        setCartItems((cartItems) => e.target.id)
    }

    return (
        <div>
<<<<<<< HEAD
            <Link to='/products'><button className="mt-2 p-2 rounded text-white bg-slate-500" onClick={handleClick}>Purchase Water</button></Link>
=======
            <Link to='/products'><button className="mr-2 p-2 rounded text-white bg-blue-700" onClick={handleClick}>Purchase Water</button></Link>
>>>>>>> main
        </div>
    )
}

<<<<<<< HEAD
export default AddToCart;
=======
export default AddToCart;










>>>>>>> main
