import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item, index }) => {
    const { name, desc, bgColor, textColor } = item;

    return (
        <div className='py-[30px] px-3 lg:px-5'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700]'>{name}</h2>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>{desc}</p>
            <div className='flex items-center justify-between mt-[30px]'>
                <button
                    type="button"
                    className="rounded-md bg-black px-6 py-2 text-3xl font-semibold text-white shadow-sm lg:hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    <Link to="/doctors"> <FiArrowRightCircle /></Link>
                </button>
                <span className='w-[40px] h-[40px] flex items-center justify-center text-lg leading-8 font-[600]' style={{background:`${bgColor}`, color:`${textColor}`, borderRadius:"6px 0 0 6px"}}>
                    {index + 1}
                </span>
            </div>
        </div>
    )
}

export default ServiceCard
