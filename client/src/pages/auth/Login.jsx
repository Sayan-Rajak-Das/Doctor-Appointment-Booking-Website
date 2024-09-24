import React from 'react'
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import { authContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';

const Login = () => {

    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value, [e.target.password]:e.target.value})
    };

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useContext(authContext);

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/auth/login`,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await res.json();

                if(!res.ok){
                    throw new error(result.message)
                }

                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload:{
                        user: result.data,
                        token: result.token,
                        role: result.role,
                    },
                }),

                console.log(result, 'login data')

                setLoading(false)
                toast.success(result.message)
                navigate('/home')
        } catch (err){
            toast.error(err.message);
            setLoading(false);
        };
    };

  return (
    <section className='px-5 lg:px-0'>
        <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-xl md:p-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 text-center md:text-left'>Hello! <span className='text-primaryColor'>Welcome </span>Back 🎉</h3>
            <form className='py-4 px-2 md:py-0 md:px-0 flex flex-col gap-9' action="" onSubmit={submitHandler}>
            <input className='w-full border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4  border-gray-300 placeholder-gray-600' type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleInputChange} required />
            <input className='w-full border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4  border-gray-300 placeholder-gray-600' type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handleInputChange} required />
            <button type='submit' className='bg-primaryColor text-white rounded-md p-2 text-lg lg:hover:bg-[#324ece] duration-150'>{loading ? <HashLoader size={25} color='white' className='mx-auto'/> : "Login"}</button>
            <p className='text-textColor'>Don&apos;t have an account ?<Link className='text-primaryColor font-medium ml-1' to="/signup"> Register</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Login