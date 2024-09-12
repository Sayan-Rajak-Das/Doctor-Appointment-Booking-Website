import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import uploadImagetoCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL } from '../../config';
import {toast} from "react-toastify"
import { HashLoader } from 'react-spinners';

const SignUp = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            password: '',
            photo: selectedFile,
            gender: '',
            role: 'patient'
        }
    );

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const data = await uploadImagetoCloudinary(file);
        setPreviewUrl(data.url);
        setSelectedFile(data.url);
        setFormData({ ...formData, photo: data.url })
    }

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/auth/register`,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                const {message} = await res.json();

                if(!res.ok){
                    throw new error(message)
                }
                setLoading(false)
                toast.success(message)
                navigate('/login')
        } catch (err){
            toast.error(err.message);
            setLoading(false);
        }
    }

    return (
        <section className='container px-5 xl:px-0 flex justify-between items-center'>
            <div className="img flex-[1] hidden lg:block">
                <img src="./signup.gif" alt="" width={600} />
            </div>
            <div className="formContainer flex-[1] p-5 shadow-xl rounded-xl">
                <form action="post" onSubmit={submitHandler} className='flex flex-col mx-auto gap-9 w-auto lg:w-[600px]'>
                    <p className='text-[22px] text-center lg:text-left py-5 leading-[5px]'><b>Create an</b> <b className='text-blue-500'>account</b></p>
                    <input className='border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4 hover:bg-gray-100  duration-150 border-gray-300 placeholder-gray-600' type="text" name='name' placeholder='Enter your full name' value={formData.name} onChange={handleInputChange} required />
                    <input className='border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4 hover:bg-gray-100  duration-150 border-gray-300 placeholder-gray-600' type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleInputChange} required />
                    <input className='border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4 hover:bg-gray-100  duration-150 border-gray-300 placeholder-gray-600' type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handleInputChange} required />
                    <div className="options flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between">
                        <div className='flex gap-2 text-xl items-center'>
                            <label htmlFor="" className='text-headingColor font-bold leading-7'>Are you a:</label>
                            <select name='role' onChange={handleInputChange} className='text-textColor font-semibold leading-7 px-4 py-3 focus:outline-none'>
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                            </select>
                        </div>
                        <div className='flex gap-2 text-xl items-center'>
                            <label htmlFor="" className='text-headingColor font-bold leading-7'>Gender: </label>
                            <select name='gender' onChange={handleInputChange} className='text-textColor font-semibold leading-7 px-4 py-3 focus:outline-none'>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className=' flex mx-auto lg:mx-0 items-center gap-3'>
                        {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                            <img src={previewUrl} className='w-full rounded-full' alt="" />
                        </figure>}
                        <div className='relative w-[130px] h-[50px]'>
                            <input type="file" name="photo" id="customFile" onChange={handleFileChange} accept='.jpg, .png' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                            <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center leading-6 px-2  bg-[#93b0ee] rounded-lg truncate cursor-pointer font-semibold text-headingColor'>Upload Photo</label>
                        </div>
                    </div>
                    <button disabled={loading && true} className='bg-primaryColor text-lg rounded-md p-2 text-white lg:hover:bg-[#324ece] duration-150' type='submit'>{loading ? <HashLoader size={35} color='#ffffff' className='mx-auto'/> : 'Sign Up'}</button>
                    <p className='text-textColor'>Already have an account ?<Link className='text-primaryColor font-medium ml-1' to="/login"> Login</Link></p>
                </form>
            </div>
        </section>

    )
}

export default SignUp


