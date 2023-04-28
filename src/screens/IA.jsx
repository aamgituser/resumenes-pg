import React, { useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";

const IA = () => {
  const [lateralMenu,setLateralMenu] = useState(false);

  function openMenu (){
    setLateralMenu(!lateralMenu);
    console.log(lateralMenu)
  }

  return (
    <main className='main_ia'>
      
    </main>
  )
}

export default IA