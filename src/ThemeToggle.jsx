import React from 'react'
import { useGlobalContext } from './context'
import { BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
const ThemeToggle = () => {
    const {isDarkTheme,toggleDarkTheme}=useGlobalContext()
 
  return (
    <section className='toggle-container'>
        <button className='dark-toggle' onClick={toggleDarkTheme}>

            {isDarkTheme ?  <BsFillSunFill className='toggle-icon'/>:<BsFillMoonFill className='toggle-icon'/>}
           

        </button>
    </section>
  )
}

export default ThemeToggle
