import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value, [e.target.password]:e.target.value})
    }

  return (
    <section className='px-5 lg:px-0'>
        <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-xl md:p-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 text-center md:text-left'>Hello! <span className='text-primaryColor'>Welcome </span>Back 🎉</h3>
            <form className='py-4 px-2 md:py-0 md:px-0 flex flex-col gap-9' action="">
            <input className='w-full border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4  border-gray-300 placeholder-gray-600' type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleInputChange} required />
            <input className='w-full border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4  border-gray-300 placeholder-gray-600' type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handleInputChange} required />
            <button type='submit' className='bg-primaryColor text-white rounded-md p-2 text-lg lg:hover:bg-[#324ece] duration-150'>Login</button>
            <p className='text-textColor'>Don&apos;t have an account ?<Link className='text-primaryColor font-medium ml-1' to="/signup"> Register</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Login