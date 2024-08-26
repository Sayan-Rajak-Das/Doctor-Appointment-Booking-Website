import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";


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
          <div className='flex py-5 flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center'>
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
                  <FiArrowRightCircle/>
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
                  <FiArrowRightCircle/>
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
                  <FiArrowRightCircle/>
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
        </div>
      </section>
    </>
  )
}

export default Home
