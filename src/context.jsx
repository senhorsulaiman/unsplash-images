import { createContext,useContext,useState,useEffect } from "react";


const AppContext=createContext()
const getIntailDarkMode=()=>{
    const preferDarkMode=window.matchMedia('(prefers-color-scheme:dark)').matches
   
    return preferDarkMode

}

export const AppProvider=({children})=>{
    const [isDarkTheme,setisDarkTheme]=useState(getIntailDarkMode());
    const [searchTerm,setSearchTerm]=useState('cat');
    const toggleDarkTheme=()=>{
        const newDarkTheme=!isDarkTheme;
        setisDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme',newDarkTheme)
        // const body =document.querySelector('body');
        // body.classList.toggle('dark-theme',newDarkTheme);
    }
    useEffect(()=>{
document.body.classList.toggle('dark-theme',isDarkTheme);
    },[isDarkTheme])
    return(<AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>

        {children}
    </AppContext.Provider>)

    
}
export const useGlobalContext=()=>useContext(AppContext)
