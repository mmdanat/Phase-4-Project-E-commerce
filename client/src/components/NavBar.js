import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
<<<<<<< HEAD
        <div className = "mx-auto max-w-screen flex justify-between items-center bg-[url(https://new.azwater.gov/sites/default/files/Confluence%20of%20the%20San%20Juan%20and%20Colorado%20Rivers%2C%20Lake%20Powell%20and%20the%20Kaiparowits%20Plateau.jpg)] contrast-35 text-center bg-cover">
            <div className='flex items-center m-4 mx-auto max-w-screen'>
                <NavLink to='/'><h1 className='text-4xl text-white font-bold m-5'>WaterWorld</h1></NavLink>
                <ul className="text-l flex me-4 justify-end">
                    {/* <li className="text-l m-2 py-2 pl-3 pr-4 text-blue-700"><NavLink to="/">Home</NavLink></li>   */}
                    <li className="text-l m-2 py-2 pl-3 pr-4 text-white"><NavLink to="/products">Products</NavLink></li>                
                    {/* <li><NavLink to="/checkout">Cart</NavLink></li>   */}
                    <li className="text-l m-2 py-2 pl-3 pr-4 text-white"><NavLink to="/users/new">Become a Member</NavLink></li>                
                    <li className="text-l m-2 py-2 pl-3 pr-4 text-white"><NavLink to="/orders">Orders</NavLink></li>
                </ul>
            </div>
=======
        <div className = "text-4xl navbar hidden w-full md:block md:w-auto bg-blue-200">
            WaterWorld
             

            <ul className="font-xl flex flex-col p-4 md:p-0 mt-4 border bold hover:font-2xl md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-blue-200">
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/">Home</NavLink></li>  
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/products">Products</NavLink></li>                
                {/* <li><NavLink to="/checkout">Cart</NavLink></li>   */}
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/users/new">Become a Memeber</NavLink></li>                
                <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/orders">Orders</NavLink></li>               
                {/* <li className="text-xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 drop-shadow-lg"><NavLink to="/orders">Orders</NavLink></li>  */}
            </ul>

>>>>>>> main
        </div>
    )
}

export default NavBar;