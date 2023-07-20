import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <div className = "navbar">
            WaterWorld
            <ul >
                <li><NavLink to="/home">Home</NavLink></li>  
                <li><NavLink to="/products">Products</NavLink></li>                
                <li><NavLink to="/checkout">Cart</NavLink></li>                 
                               
            </ul>

        </div>
    )
}

export default NavBar;