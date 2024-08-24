import React from 'react'
import { useState } from 'react'

const SignUp = () => {
    const [category, setCategory] = useState("Select");

    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleInputChange = () => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <div className='container h-[100vh] relative flex justify-between items-center'>
            <div className="img flex-[1]">
                <img src="./medical-team.png" alt="" width={600}/>
            </div>
            <div className="formContainer flex-[1] p-5 shadow-xl rounded-xl">
                <p className='text-3xl py-5'><b>Create an</b> <b className='text-blue-500'>account</b></p>
                <form action="post" className='flex flex-col gap-9 w-[600px]'>
                    <input className='border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4 hover:bg-gray-100  duration-150 border-gray-300 placeholder-gray-600' type="text" name='name' placeholder='Enter your full name' required />
                    <input className='border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4 hover:bg-gray-100  duration-150 border-gray-300 placeholder-gray-600' type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleInputChange} required />
                    <input className='border-b-2 border-solid focus:border-b-primaryColor focus:outline-none text-xl rounded-md p-4 px-4 hover:bg-gray-100  duration-150 border-gray-300 placeholder-gray-600' type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handleInputChange} required />
                    <div className="options flex justify-between">
                        <div className='flex gap-2 text-xl items-center'>
                            <p>Are you a: </p>
                            <select>
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                            </select>
                        </div>
                        <div className='flex gap-2 text-xl items-center'>
                            <p>Gender: </p>
                            <select>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <button className='bg-primaryColor text-xl rounded-md p-2 text-white' type='submit'>Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default SignUp


