import React from 'react'
import DoctorCard from "../../components/doctors/DoctorCard"
import {doctors} from "../../assets/data/doctors"
import Testimonials from '../../components/testimonials/Testimonials'

const FindDoctor = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center'>
        <h2 className='heading'>Find a Doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#d3e4ff] rounded-md flex items-center justify-between">
          <input type="search" name="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-lg placeholder:text-textColor' placeholder='Find a Doctor'/>
          <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {
            doctors.map(doctor=>(
              <DoctorCard key={doctor.id} doctor={doctor}/>
            ))
          }
        </div>
      </div>
    </section>
    <section>
      <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Patient Reviews</h2>
            <p className='text-textColor leading-8 text-lg py-4 text-center'>World Class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>
          <Testimonials/>
        </div>
      </section>
    </>
  )
}

export default FindDoctor
