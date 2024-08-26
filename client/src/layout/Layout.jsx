import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
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
