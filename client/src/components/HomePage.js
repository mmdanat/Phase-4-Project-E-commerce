import React from 'react';
import { Link } from "react-router-dom";


function HomePage(){
   

    return(
        <div className = "flex justify-center min-h-screen bg-[url(https://new.azwater.gov/sites/default/files/Confluence%20of%20the%20San%20Juan%20and%20Colorado%20Rivers%2C%20Lake%20Powell%20and%20the%20Kaiparowits%20Plateau.jpg)] contrast-35 text-center bg-cover">
            <div className='bg-slate-400/75 rounded px-20 w-3/4 mt-36 mb-36'>
                <h1 className="tracking-widest text-3xl m-5 mb-10 font-bold">Welcome to Water World!</h1>
                <p className = "text-center text-xl">Thanks for stopping in, we are local to the Colorado area and here to give you access to the water you need!</p>
                <h2 className="tracking-widest text-2xl m-5 font-bold">Our Story</h2>
                <p className = "text-xl m-5">We started due to a decrease in global water supply which lead to regulations being placed on the available water in the Colorado River.</p>
                <p className = "text-xl m-5">Lucky for us big companies had the foresight in the early 2000s to buy land with water rights. Since then they have been safekeeping that water!</p>
                <p className = "text-xl m-5">Fast forward to today... We are one of many companies that serve local areas to help people get access to clean water at a reasonable price! </p>
                <p className = "text-xl m-5">We have a variety of products available and a great membership program to get exclusive deals. Click the link below to see what we have!</p>
                <Link to='/products'><button className = "text-xl bg-blue-100/75 rounded-lg w-36 h-12 py-2 m-5">Start Shopping</button></Link>
            </div>
        </div>
    )
}

export default HomePage;