// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useFormik } from 'formik';
// // import { object, string, number } from 'yup'

// function CustomerInfo({addUser}){

//     const formik = useFormik({
//         initalValues: {
//             name: '',
//             email_address:''
//         },
//         onSubmit:(values) =>{
//             alert(JSON.stringify(values, null, 2));
//         }
//     })

    
//     return(
//         <div>
//             <form className ="Customer-Info-Form" onSubmit = {formik.handleSubmit}>

//                 <div className ="form-group">
//                     <label>Name</label>
//                     <input
//                         type = "text"
//                         name = "name"
//                         value = {formik.values.name}
//                         onChange={formik.handleChange}
//                         />
//                 </div>

//                 <div className ="form-group">
//                     <label>Email Address</label>
//                     <input
//                         type = "text"
//                         name = "email_address"
//                         value = {formik.values.email_address}
//                         onChange={formik.handleChange}
//                         />
//                 </div>

//                 <input type="submit" name= "button"> Submit your Info</input>

//              </form>

//         </div>
//     )
// }



import React from 'react';
import { useFormik } from 'formik';

const CustomerInfo = () => {
  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      //make this a post TODO;
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />
        
        <label htmlFor="name">Name</label>
        <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
        />

        </div>
     

      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerInfo;
