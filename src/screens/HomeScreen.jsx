import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate()
  return (
    <main className='indx'>
        <div className='box' onClick={()=>{navigate('/contenido')}}>Ir al contenido principal</div>
        <div className='box'>Inteligencia Artificial</div>
        <div className='box'>Desarrollo de Software</div>
        <div className='box'>Desarrollo web</div>
    </main>
  )
}

export default HomeScreen