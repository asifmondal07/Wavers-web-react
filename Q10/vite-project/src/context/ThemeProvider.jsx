import { useContext,createContext ,useState, useEffect} from "react";




export const themeContext=createContext()

export function ThemeProvider({children}){

    const [themeMode,setThemeMode]=useState(()=>localStorage.getItem("themeMode") || "light")

    const lightTheme=()=>setThemeMode('light')
    const darkTheme=()=>setThemeMode('dark')
    useEffect(()=>{
        localStorage.setItem("themeMode",themeMode)
    },[themeMode])


    return(
        <themeContext.Provider value={{themeMode,lightTheme,darkTheme}}>
            {children}
        </themeContext.Provider>
    )
}



export default function useTheme(){
    return useContext(themeContext)
}