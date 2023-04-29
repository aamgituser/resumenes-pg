import React from 'react'
import { BiMenuAltLeft } from "react-icons/bi";

const Aside = () => {
  return (
    <aside className='aside'>
      <BiMenuAltLeft/>
      <div className='aside__content'>
        <span><a href='#estadistica_y_probabilidad'>Estadistica y Probabilidad</a></span>
        <div className='aside__content-submenu'>
          <span><a href='#medidas_estadisticas'>Medidas Estadisticas</a></span>
          <span><a href='#distribuciones_en_tablas_de_contingencia'>Distribuciones en tablas de contingencia</a></span>
          <span><a href='#medidas_de_dispercion'>Medidas de dispercion</a></span>
        </div>

        <span><a href='#python'>Python</a></span>
        
        <span><a href='#editores_de_codigo'>Editores de codigo</a></span>
        
        <span><a href='#matplotlib'>MatplotLib</a></span>
        <div className='aside__content-submenu'>
          <span><a href='#matplotlib_comandos_basicos'>Comandos basicos</a></span>
        </div>
        
        <span><a href='#numpy'>Numpy</a></span>
        <div className='aside__content-submenu'>
          <span><a href='#numpy_comandos_basicos'>Comandos basicos</a></span>
          <span><a href='#matrices_vacias'>Matrices vacias</a></span>
          <span><a href='#redimension_de_matrices'>Redimension de matrices</a></span>
        </div>
        
        <span><a href='#pandas'>Pandas</a></span>
        
        <span><a href='#sickitlearn'>Sickit Learn</a></span>
        <div className='aside__content-submenu'>
          <span><a href='#datasets'>Datasets</a></span>
        </div>

      </div>
    </aside>
  )
}

export default Aside