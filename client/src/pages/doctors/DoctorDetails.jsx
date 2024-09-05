import React, { useState } from 'react'
import AboutDoctor from './AboutDoctor'
import Feedback from './Feedback'

const DoctorDetails = () => {
  const [tab, setTab] = useState('about')
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 md:gap-[50px]">

          <div className='md:col-span-3'>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src="../../../public/doctor-img02.png" alt='' className='w-full rounded-md'/>
              </figure>
              <div>
                <span className='bg-[#ffed9c] rounded-md p-2 lg:py-2 lg:px-6 text-base lg:text-lg font-semibold text-[#594c11]'>Surgeon</span>
                <h3 className='text-headingColor text-2xl leading-9 mt-3 font-semibold'> Dr. Anjali Mehta</h3>
                <div className='flex items-center gap-[9px]'>
                  <span className='flex items-center gap-[6px] text-base leading-5 lg:text-lg font-semibold text-headingColor'>
                    <img src="../../../Star.png" alt="" /> 4.8
                  </span>
                  <span className='text-base lg:text-lg leading-5 lg:leading-7 font-[400] text-textColor'>(719)</span>
                </div>
                <p className='text-md lg:text-lg text-textColor leading-5 max-w-[390px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam perspiciatis obcaecati quas ab dolore minus tempore nisi facere quia!</p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'> 
              <button onClick={()=>setTab('about')} className={`${tab === 'about' && `border-b-2 border-solid border-primaryColor`} py-2 px-5 mr-5 text-base leading-5 text-headingColor font-semibold`}>About</button>
              <button onClick={()=>setTab('feedback')} className={`${tab === 'feedback' && `border-b-2 border-solid border-primaryColor`} py-2 px-5 mr-5 text-base leading-5 text-headingColor font-semibold`}>Feedback</button>
            </div>

            <div className='mt-[50px]'>
              {tab === 'about' && <AboutDoctor /> ||  tab === 'feedback' && <Feedback />}
            </div>
          </div>

          <div></div>

        </div>
      </div>
    </section>
  )
}

export default DoctorDetails
 