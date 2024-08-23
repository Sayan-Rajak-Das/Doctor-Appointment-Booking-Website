import React from 'react'
import { useEffect, useRef } from 'react'
import { BiMenu } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

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
    const menuRef = useRef(null);

    const handleStickyNavbar = () =>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                navbarRef.current.classList.add('stickyNavbar')
            }else{
                navbarRef.current.classList.remove('stickyNavbar')
            }
        })
    }

    useEffect(() => {
      handleStickyNavbar()

      return () => window.removeEventListener('scroll', handleStickyNavbar);
    },)

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
    
    return (
        <div className='bg-gradient-to-r from-[#eaf4bb] via-[#e1f8fb] to-[#c6c0fe]' ref={navbarRef}>
            <nav className='flex items-center max-w-[1536px] mx-auto justify-between  h-[80px]'>
                <div className="logo flex items-center gap-2">
                    <img className='h-10 w-10' src="./logo.png" alt="" />
                    <span className='text-2xl font-semibold'>Medicare</span>
                </div>
                <ul className='hidden md:flex gap-10 text-xl font-semibold'>
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
                    <span className='md:hidden'>
                        <BiMenu className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
