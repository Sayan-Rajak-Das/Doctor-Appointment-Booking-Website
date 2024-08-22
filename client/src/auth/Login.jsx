import React from 'react'

const Login = () => {
    return (

        <div className='max-w-[1366px] mx-auto flex justify-between items-center p-4'>
            <div className="img flex-[1]">
                <img src="./medical-team.png" alt="" />
            </div>
            <div className="formContainer flex-[1] p-3">
                <p className='text-2xl font-[600] py-5'>Create an <b className='text-blue-500'>account</b></p>
                <form action="post" className='flex flex-col gap-6 w-[500px]'>
                    <input className='border-2 text-lg rounded-md p-2 px-4 hover:bg-gray-100 duration-150 border-gray-300 placeholder-gray-600' type="text" name='name' placeholder='Enter your name' required />
                    <input className='border-2 text-lg rounded-md p-2 px-4 hover:bg-gray-100 duration-150 border-gray-300 placeholder-gray-600' type="email" name='email' placeholder='Enter your email' required />
                    <input className='border-2 text-lg rounded-md p-2 px-4 hover:bg-gray-100 duration-150 border-gray-300 placeholder-gray-600' type="password" name='password' placeholder='Enter your password' required />
                    <div className="options flex justify-between">
                        <div className='flex gap-2'>
                            <p>Are you a: </p>
                            <select>
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                            </select>
                        </div>
                        <div className='flex gap-2'>
                            <p>Gender: </p>
                            <select>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login
