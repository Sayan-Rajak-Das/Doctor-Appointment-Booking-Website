import React from 'react'
import { formatDate } from '../../utils/formatDate'

const AboutDoctor = () => {
    return (
        <div>
            <div>
                <h3 className='text-xl leading-7 text-headingColor font-semibold flex items-center gap-3'>About of<span className='text-[#316ddc] font-bold text-2xl tracking-wider'>Anjali Mehta</span></h3>
                <p className='leading-6 py-3 max-w-[900px]'>Dr. Anjali Mehta is a highly skilled and compassionate surgeon with over a decade of experience in performing complex surgical procedures. She is dedicated to providing top-quality patient care and is known for her expertise in minimally invasive techniques.</p>
            </div>
            <div className='mt-10'>
                <h3 className='text-headingColor text-xl font-semibold'>Education</h3>
                <ul className='pt-4 md:py-5 max-w-[900px]'>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                        <div>
                            <span className='text-irisBlueColor leading-6 text-base font-semibold'>{formatDate("08-13-2010")} - {formatDate("05-04-2015")}</span>
                            <p className='font-medium leading-6'>Doctor of Medicine (MD) - General Surgery</p>
                        </div>
                        <p className='font-medium leading-6 text-base'>All India Institute of Medical Sciences (AIIMS), New Delhi</p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                        <div>
                            <span className='text-irisBlueColor leading-6 text-base font-semibold'>{formatDate("07-07-2015")} - {formatDate("06-18-2019")}</span>
                            <p className='font-medium leading-6'>Residency - General Surgery</p>
                        </div>
                        <p className='font-medium leading-6 text-base'>Apollo Hospital, New Delhi</p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                        <div>
                            <span className='text-irisBlueColor leading-6 text-base font-semibold'>{formatDate("09-07-2019")} - {formatDate("08-18-2020")}</span>
                            <p className='font-medium leading-6'>Fellowship - Minimally Invasive Surgery</p>
                        </div>
                        <p className='font-medium leading-6 text-base'>Massachusetts General Hospital, Boston, USA</p>
                    </li>
                </ul>
            </div>
            <div className='mt-10'>
                <h3 className='text-headingColor text-xl font-semibold'>Experience</h3>
                <ul className='grid sm:grid-cols-2 gap-[50px] pt-4 md:5 max-w-[900px]'>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-base leading-6 font-semibold'>{formatDate("07-04-2010")} - {formatDate("08-13-2014")}</span>
                        <p className='text-base leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                        </p>
                        <p className='font-medium leading-6 text-base'>All India Institute of Medical Sciences (AIIMS), New Delhi</p>
                    </li>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-base leading-6 font-semibold'>{formatDate("07-04-2010")} - {formatDate("08-13-2014")}</span>
                        <p className='text-base leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                        </p>
                        <p className='font-medium leading-6 text-base'>All India Institute of Medical Sciences (AIIMS), New Delhi</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutDoctor
