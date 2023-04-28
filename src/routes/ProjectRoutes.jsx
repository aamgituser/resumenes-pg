import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import IA from '../screens/IA'
import Contenido from '../screens/Contenido'

const ProjectRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/inteligencia-artificial' element={<IA/>} />
        <Route path='/contenido' element={<Contenido/>}/>
    </Routes>
  )
}

export default ProjectRoutes