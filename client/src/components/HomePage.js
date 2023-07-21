import React from 'react';
import {Link } from "react-router-dom";


function HomePage(){
   

    return(
        <div className = "min-h-screen bg-[url(https://new.azwater.gov/sites/default/files/Confluence%20of%20the%20San%20Juan%20and%20Colorado%20Rivers%2C%20Lake%20Powell%20and%20the%20Kaiparowits%20Plateau.jpg)] contrast-35 text-center font-mono bg-cover ">
            <h1 className="tracking-widest text-3xl py-20 ">Welcome to Water World!</h1>
            <p className = "text-center text-xl bg-blur hover:bg-slate-400 rounded px-20">Thanks for stopping in, we are local to the Colorado area and here to give you access to the water you need!</p>
            <h2 className="tracking-widest text-2xl py-20">Our Story</h2>
            <p className = "text-xl hover:bg-slate-400 bg-blur rounded px-20">We started due to a decrease in global water supply which lead to regulations being placed on the available water in the Colorado River.<br/>
            Lucky for us big companies had the foresight in the early 2000s to buy land with water rights. Since then they have been safekeeping that water for when it would need to be distributed at a later date!<br/>
                Fast forward to today... We are one of many companies that serve local areas to help people get access to clean water at a reasonable price! <br/>
            We have a variety of products available and a great membership program to get exclusive deals. Click the link below to see what we have!<br/></p>
            <Link to='/products'><button className = "text-xl border-black py-20 hover:font-mono underline">Start Shopping</button></Link>
        </div>
    )
}

export default HomePage;