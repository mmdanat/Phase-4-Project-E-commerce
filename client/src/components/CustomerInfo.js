


function CustomerInfo({users}){

    



    return(
        <div className="form-box">
            <form className ="Customer-Info-Form" onSubmit={handleSubmitForm} >
                <label htmlFor="form">Enter your Information</label>
                <input type="text" id="name" name="name" placeholder="Your Name..." required/> 
                <input type="text" id="address" name="address" placeholder="Address" />
                <input type="text" id="city" name="city" placeholder=" City" />
                <input type="text" id="state" name="state" placeholder=" State" />
                <input type="text" id="postal-code" name="" placeholder=" Postal Code" />

                <button type="submit" ></button>


             </form>


        </div>
    )
}



export default CustomerInfo;