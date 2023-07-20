import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <div className = "text-4xl navbar hidden w-full md:block md:w-auto bg-blue-200">
            WaterWorld
            <ul class="font-xl flex flex-col p-4 md:p-0 mt-4 border bold hover:font-2xl md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-blue-200">
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/">Home</NavLink></li>  
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/products">Products</NavLink></li>                
                {/* <li><NavLink to="/checkout">Cart</NavLink></li>   */}
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/users/new">Become a Memeber</NavLink></li>                
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/orders">Orders</NavLink></li>               
            </ul>

        </div>
    )
}

export default NavBar;