import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const PublicLayout = ({children}) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar></Navbar>
      <main className='h-full bg-blue-400'><Outlet></Outlet></main>
      <Footer></Footer>
    </div>
  )
}

export default PublicLayout