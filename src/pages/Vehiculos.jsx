import React, { useEffect, useState } from 'react'

const Vehiculos = () => {

    const [form, setForm] = useState({nombre: '', marca: '', modelo: ''})

    const [boton, setBoton] = useState({estado: true, texto: 'Crear  vehiculo'})

    useEffect(() => {
      if(boton.estado = true){
        setBoton({...boton, texto:'Crear vehiculo'})
      }else{
        setBoton({...boton, texto:'Mostrar vehiculos'})
      }
    }, [boton])
    
    
  return (
    <div>
        <h2>Creacion de Vehiculos</h2>
        <button onClick={()=>{setBoton({...boton, estado:!boton.estado})}} className='bg-indigo-400'>{boton.texto}</button>
        <form action="">
            <input onChange={(e)=>{setForm({...form, nombre:e.target.value})}} type="text" placeholder='nombre vehiculo' />
            <input onChange={(e)=>{setForm({...form, marca:e.target.value})}} type="text" placeholder='Marca del vehiculo' />
            <input onChange={(e)=>{setForm({...form, modelo:e.target.value})}} type="text" placeholder='Modelo del vehiculo' />
            <button className='bg-indigo-700' type="submit">Enviar datos</button>
        </form>
    </div>
  )
}

export default Vehiculos