import React from 'react'
import Home from "../pages/Home"
import Services from "../pages/Services";
import FindDoctor from "../pages/doctors/FindDoctor";
import DoctorDetails from '../pages/doctors/DoctorDetails';
import Contact from "../pages/Contact";
import Login from "../pages/auth/Login";
import { Route, Routes } from 'react-router-dom';
import SignUp from '../pages/auth/SignUp';

const Routers = () => {
    
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/doctors' element={<FindDoctor/>}/>
        <Route path='/doctors/:id' element={<DoctorDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default Routers
