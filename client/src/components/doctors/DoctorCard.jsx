import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FiArrowRightCircle } from 'react-icons/fi'

const DoctorCard = ({doctor}) => {
    const {name, avgRating, totalRating, specialization, photo, totalPatients, hospital} = doctor
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} className='w-full rounded-2xl' alt="" />
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>{name}</h2>
        <div className='mt-2 lg:mt-4 flex justify-between items-center'>
            <span className='bg-[#ffed9c] rounded-md p-2 lg:py-2 lg:px-6 text-base lg:text-lg font-semibold text-[#594c11]'>{specialization}</span>
            <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-2 font-semibold text-headingColor text-base lg:text-lg'><img src="./Star.png" alt="" /> {avgRating}</span>
                <span className='text-textColor text-base lg:text-lg '>({totalRating})</span>
            </div>
        </div>
        <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
            <div>
                <h3 className='text-base lg:text-lg leading-7 font-semibold'>+{totalPatients} patients</h3>
                <p className='text-base lg:text-lg text-textColor font-[400]'>At {hospital}</p>
            </div>
            <Link
                  to="/doctors"
                  className="mt-4 w-[44px] h-[44px] flex items-center justify-center rounded-md lg:hover:bg-primaryColor lg:hover:text-white duration-150 text-3xl font-semibold"
                >
                  <FiArrowRightCircle />
                </Link>
        </div>
    </div>
  )
}

export default DoctorCard
