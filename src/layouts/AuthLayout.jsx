import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({children}) => {
  return (
    <div className='flex flex-col  w-screen justify-center '>AuthLayout🐱🐱🐱
      <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout