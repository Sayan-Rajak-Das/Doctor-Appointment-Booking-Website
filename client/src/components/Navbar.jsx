import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-[#eaf4bb] via-[#e1f8fb] to-[#c6c0fe] '>
            <nav className='flex items-center max-w-[1536px] mx-auto justify-between px-5 py-3'>
                <div className="logo flex items-center gap-2">
                    <img className='h-10 w-10' src="./logo.png" alt="" />
                    <span className='text-2xl font-semibold'>Medicare</span>
                </div>
                <ul className='flex gap-10 text-lg font-semibold'>
                    <li><NavLink className={(e) => { return e.isActive ? "text-[#2930bc]" : "" }} to="/">Home</NavLink></li>
                    <li><NavLink className={(e) => { return e.isActive ? "text-[#3b45f1]" : "" }} to="/services">Services</NavLink></li>
                    <li><NavLink className={(e) => { return e.isActive ? "text-[#3b45f1]" : "" }} to="/doctors">Find a Doctor</NavLink></li>
                    <li><NavLink className={(e) => { return e.isActive ? "text-[#3b45f1]" : "" }} to="/contact">Contact</NavLink></li>
                </ul>
                <button className="text-lg border rounded-md text-white p-2 px-5 bg-black"><NavLink to="/login">Login</NavLink></button>
            </nav>
        </div>
    )
}

export default Navbar
