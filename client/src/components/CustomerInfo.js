
import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';

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
    <>
    <NavBar/>
    <div className='flex justify-center'>
      <form className="w-1/4 m-5" onSubmit={formik.handleSubmit}>
        <div className='flex flex-col'>
          <label className="mt-5" htmlFor="email">Email</label>
          <input className="searchTerm rounded border p-2"
              id="email_address"
              name="email_address"
              type="email_address"
              onChange={formik.handleChange}
              value={formik.values.email_address}
          />
          <label className="mt-5" htmlFor="name">Name</label>
          <input className="searchTerm rounded border p-2"
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
          />
          <label className="mt-5" htmlFor="name">Address</label>
          <input className="searchTerm rounded border p-2"
              id="mail_address"
              name="mail_address"
              type="mail_address"
              onChange={formik.handleChange}
              value={formik.values.mail_address}
          />
        </div>
        <button className="mt-5 p-2 rounded text-white bg-slate-500" type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default CustomerInfo;
