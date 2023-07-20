import React from 'react';
import {Link } from "react-router-dom";


function HomePage(){
   

    return(
        <div className = "h-screen bg-[url(https://new.azwater.gov/sites/default/files/Confluence%20of%20the%20San%20Juan%20and%20Colorado%20Rivers%2C%20Lake%20Powell%20and%20the%20Kaiparowits%20Plateau.jpg)] bg-cover contrast-35 text-center">
            <h1 className="tracking-widest text-2xl py-20 ">Welcome to Water World!</h1>
            <p className = "text-center" >Thanks for stopping in, we are local to the Colorado area and here to give you access to the water you need!</p>
            <h2 className="tracking-widest text-2xl py-20">Our Story</h2>
            <p className = "">We started due to a decrease in water supply and a need for regulation of avaliable water in the Colordo River.<br/>
            Lucky for us big companies had the forsight in the early 2000s to buy land with water rights, so that they could keep it safe for when it later needed to be distributed!<br/>
                Fast forward to today... We now help those companies distribute water to the people like you! <br/>
            We have a variety of products avaliale and you can also become a member to get exclusive deals.<br/></p>
            <Link to='/products'><button className = "text-xl border-black py-20 hover:font-mono underline">Start Shopping</button></Link>
        </div>
    )
}

export default HomePage;