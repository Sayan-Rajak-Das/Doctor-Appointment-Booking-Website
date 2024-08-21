import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-5 py-3'>
            <div className="logo text-xl">
                Logo
            </div>
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>Services</li>
                <li>Facilities</li>
            </ul>
            <button>Login</button>
        </nav>
    )
}

export default Navbar
