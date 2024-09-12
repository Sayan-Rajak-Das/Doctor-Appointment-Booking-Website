import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ServiceList from '../components/services/ServiceList';
import DoctorList from '../components/doctors/DoctorList';
import FaqList from '../components/faq/FaqList';
import Testimonials from '../components/testimonials/Testimonials';


const Home = () => {
  return (
    <>
      <section className='2xl:h-[800px] bg-[url(hero-bg.png)] bg-no-repeat bg-cover'>
        <div className='flex container items-center justify-between'>
          <div className="relative isolate z-0 px-6 pt-14 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24">
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  We help patients live a healthy, longer life.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                  cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
                  aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-2">
                  <button
                    type="button"
                    className="rounded-xl bg-primaryColor px-4 py-3 duration-150 text-md font-semibold text-white shadow-sm lg:lg:hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Request an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:flex gap-4 justify-between hidden'>
            <img src="./hero-img01.png" alt="" />
            <div className='flex flex-col gap-3'>
              <img src="./hero-img02.png" alt="" />
              <img src="./hero-img03.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the Best</h2>
            <p className='text-textColor leading-8 text-lg py-4 text-center'>World Class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>
          <div className='flex py-5 flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-center'>
            <div className="w-[350px] h-[400px] flex flex-col justify-between gap-3 items-center rounded-md ">
              <img
                src="./icon01.png"
                alt="doctor"
                className="h-[200px] w-full rounded-md object-contain"
              />
              <div className="p-4 text-center">
                <h1 className="text-xl font-semibold">Find a Doctor</h1>
                <p className="mt-3 text-lg text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 mx-auto rounded-md bg-black px-6 py-2 text-3xl font-semibold text-white shadow-sm lg:hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Link to="/doctors"> <FiArrowRightCircle /></Link>
                </button>
              </div>
            </div>
            <div className="w-[350px] h-[400px] flex flex-col justify-between gap-3 items-center rounded-md ">
              <img
                src="./icon02.png"
                alt="location"
                className="h-[200px] w-full rounded-md object-contain"
              />
              <div className="p-4 text-center">
                <h1 className="text-xl font-semibold">Find a Location</h1>
                <p className="mt-3 text-lg text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 mx-auto rounded-md bg-black px-6 py-2 text-3xl font-semibold text-white shadow-sm lg:hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Link to="/doctors"> <FiArrowRightCircle /></Link>
                </button>
              </div>
            </div>
            <div className="w-[350px] h-[400px] flex flex-col justify-between gap-3 items-center rounded-md ">
              <img
                src="./icon03.png"
                alt="appointment"
                className="h-[200px] w-full rounded-md object-contain"
              />
              <div className="p-4 text-center">
                <h1 className="text-xl font-semibold">Book an Appointment</h1>
                <p className="mt-3 text-lg text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                  debitis?
                </p>
                <button
                  type="button"
                  className="mt-4 mx-auto rounded-md bg-black px-6 py-2 text-3xl font-semibold text-white shadow-sm lg:hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Link to="/doctors"> <FiArrowRightCircle /></Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text-textColor leading-8 text-lg py-4 text-center'>World Class care for everyone. Our health system offers unmatched, expert health care.</p>

          </div>
          <ServiceList />
        </div>

        <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' className="relative container">
          <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full bg-gray-100 ">
                  <span className="self-center text-4xl text-gray-800 transition duration-700"><img src="./slideimg01.jpg" alt="" className='object-contain brightness-50' /></span>
                  <p className='absolute bottom-16 text-white tracking-widest text-xl lg:text-3xl font-semibold' >Friendly Doctors</p>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex justify-center  h-full bg-gray-200">
                  <span className="self-center text-4xl text-gray-800 transition duration-700"><img src="./slideimg02.jpg" alt="" className='object-contain brightness-50' /></span>
                  <p className='absolute bottom-16 text-white tracking-widest text-xl lg:text-3xl font-semibold' >Advance Technology</p>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full bg-gray-300">
                  <span className="self-center text-4xl text-gray-800 transition duration-700"><img src="./slideimg03.jpg" alt="" className='object-contain brightness-50' /></span>
                  <p className='absolute bottom-16 text-white tracking-widest text-xl lg:text-3xl font-semibold' >Expert Doctors</p>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="flex justify-center h-full bg-gray-300">
                  <span className="self-center text-4xl text-gray-800 transition duration-700"><img src="./slideimg04.jpg" alt="" className='object-contain brightness-50' /></span>
                  <p className='absolute bottom-16 text-white tracking-widest text-xl lg:text-3xl font-semibold' >Emergency Services</p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg">
            <span className="text-2xl" aria-hidden="true">
              <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg">
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>

          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
            <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          </div>
        </div>
      </section>
      {/* Doctors Section */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Great Doctors</h2>
            <p className='text-textColor leading-8 text-lg py-4 text-center'>World Class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* Faqs Section */}
      <section>
        <div className="container">
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src="./faq-img.png" alt="" />
            </div>
            <div className='w-full md:w-1/2'>
            <h2 className='heading'>Frequently Asked Questions</h2>
            <FaqList/>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
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

export default Home
