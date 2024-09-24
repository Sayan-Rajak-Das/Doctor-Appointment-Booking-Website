import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-textColor mt-0'>Ticket Price</p>
        <span className='text-base leading-7 lg:text-xl text-headingColor font-bold'>Rs.500</span>
      </div>
      <div className='mt-[30px]'>
        <p className='mt-0 text-headingColor leading-6 font-semibold'>Available Time Slots: </p>
        <ul className='mt-3'>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-base leading-6 text-textColor font-semibold'>Monday</p>
                <p className='text-base leading-6 text-textColor font-semibold'>4:00PM - 8:30PM</p>
            </li>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-base leading-6 text-textColor font-semibold'>Wednesday</p>
                <p className='text-base leading-6 text-textColor font-semibold'>6:00PM - 9:30PM</p>
            </li>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-base leading-6 text-textColor font-semibold'>Friday</p>
                <p className='text-base leading-6 text-textColor font-semibold'>4:30PM - 8:00PM</p>
            </li>
        </ul>
      </div>
      <button className='btn px-2 w-full rounded-md'>Book Now</button>
    </div>
  )
}

export default SidePanel
