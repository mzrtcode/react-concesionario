import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-500 flex '>
      <ul className='flex w-full justify-between py-3'>
        <li>
            Logo
        </li>
        <li>
          Navegacion
        </li>
        <li className=''>
          <Link to="/login">
          <button className='bg-green-400 text-white rounded-lg shadow-mg hover:bg-green-700'>Iniciar sesion</button>

          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar