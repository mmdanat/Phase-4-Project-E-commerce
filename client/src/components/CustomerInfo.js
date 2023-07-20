
import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'

const CustomerInfo = ({addUser}) => {
    const navigate =useNavigate()
    const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
    },
    onSubmit: values => {
        fetch("http://localhost:5555/users",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(values)
        })
            .then(resp => resp.json())
            .then(user =>{
                addUser(user)
                navigate('/products')

            })
      
    } 
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="email">Email Address</label>
        <input
            id="email_address"
            name="email_address"
            type="email_address"
            onChange={formik.handleChange}
            value={formik.values.email_address}
        />
        
        <label htmlFor="name">Name</label>
        <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
        />

        <label htmlFor="name">Mail Address</label>
        <input
            id="mail_address"
            name="mail_address"
            type="mail_address"
            onChange={formik.handleChange}
            value={formik.values.mail_address}
        />

        </div>
     

      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerInfo;
