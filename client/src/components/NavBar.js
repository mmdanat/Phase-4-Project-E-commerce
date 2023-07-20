import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <div className = "navbar">
            WaterWorld
            <ul >
                <li><NavLink to="/">Home</NavLink></li>  
                <li><NavLink to="/products">Products</NavLink></li>                
                <li><NavLink to="/checkout">Cart</NavLink></li>  
                <li><NavLink to="/users/new">Become a Memeber</NavLink></li>                
                               
            </ul>

        </div>
    )
}

export default NavBar;