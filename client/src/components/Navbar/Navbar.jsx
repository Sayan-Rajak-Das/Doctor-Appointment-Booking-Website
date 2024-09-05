import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaXmark } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navLinks = [
        {
            path: "/",
            display: "Home"
        },
        {
            path: "/services",
            display: "Services"
        },
        {
            path: "/doctors",
            display: "Find a Doctor"
        },
        {
            path: "/contact",
            display: "Contact"
        },
    ]

    const navbarRef = useRef(null);

    const handleStickyNavbar = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                navbarRef.current.classList.add('stickyNavbar')
            } else {
                navbarRef.current.classList.remove('stickyNavbar')
            }
        })
    }

    useEffect(() => {
        handleStickyNavbar()

        return () => window.removeEventListener('scroll', handleStickyNavbar);
    },)

    const handleToggleMenu = () => {
        setOpen(!open);
    }

    return (
        <div className='bg-[url(../../../public/header-bg.png)] bg-no-repeat bg-cover' ref={navbarRef}>
            <nav className='flex items-center max-w-[1536px] mx-auto justify-between px-2 lg:px-0 h-[80px]'>
                <div className="logo flex items-center gap-2">
                    <img className='h-10 w-10' src="../../../public/logo.png" alt="" />
                    <span className='text-2xl font-semibold'>Medicare</span>
                </div>
                <ul className='hidden lg:flex gap-10 text-xl font-semibold'>
                    {navLinks.map((item, i) =>
                        <li key={i}><NavLink className={(e) => { return e.isActive ? "text-[#2930bc] border-b-2 border-[#2930bc] px-1" : "px-1" }} to={item.path}>{item.display}</NavLink></li>
                    )}
                </ul>
                <div className="flex items-center gap-4">
                    <div className='hidden'>
                        <NavLink to="/">
                            <figure className='w-[45px] h-[45px] rounded-full cursor-pointer border border-black'>
                                <img src="{userImg}" className='w-full rounded-full' alt="" />
                            </figure>
                        </NavLink>
                    </div>
                    <NavLink to="/login">
                        <button className="text-xl border rounded-[30px] text-white p-3 px-8 bg-[#2e3cfa] duration-200 hover:bg-blue-600">Login</button>
                    </NavLink>
                    {/* mobile sidebar */}
                    <span className='block lg:hidden' onClick={handleToggleMenu}>
                        {
                            open ? <FaXmark className='w-6 h-6' /> : <BiMenu className='w-6 h-6 text-primary' />
                        }
                    </span>
                </div>
            </nav>

            {/* mobile link options */}
            <div className={`px-4 bg-black py-5 rounded-sm text-center ${open ? "" : "hidden"}`}>
                <ul className='text-white flex flex-col gap-4'>
                    {navLinks.map((item, i) =>
                        <li key={i}><NavLink className={(e) => { return e.isActive ? "text-[#555eff] border-b-2 border-[#2930bc] px-1" : "px-1" }} to={item.path}>{item.display}</NavLink></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
