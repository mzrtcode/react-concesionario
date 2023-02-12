import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='text-2xl font-bold text-cente'>Iniciar sesion con google</h2>

      <form action="" method=''>
        <label className='block' htmlFor="username">username</label>
        <input className='block border' type="email" name='username' id='username'/>
        <label htmlFor="password">password</label>
        <input className='block border' type="text" name='password' id='password'/>
        <div>
        <label  htmlFor="recuerdame" >Recuerdame </label>
        <input type="checkbox" name="recuerdame" id="recuerdame" />
        </div>

        <button className='bg-green-500 py-2 px-3 rounded-xl' type="submit">Iniciar sesion</button>
      </form>
    </div>
  )
}

export default Login