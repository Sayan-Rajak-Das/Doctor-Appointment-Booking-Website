import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
   <>
   <Navbar/>
   <main>
    <Routers/>
   </main>
   <Footer/>
   </>
  )
}

export default Layout
