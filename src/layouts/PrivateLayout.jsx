import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
const PrivateLayout = ({children}) => {
  return (
    <div className='flex w-screen h-screen '>
      
      <Sidebar></Sidebar>
      <main className='flex w-full bg-blue-400'><Outlet></Outlet></main>
    </div>
  )
}

export default PrivateLayout