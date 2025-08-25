// src/App.jsx
import {useState,useEffect} from "react";
import ThemeToggleButton from './component/ThemeToggleButton';
import Card from "./component/Card";
import { ThemeProvider } from "./context/ThemeProvider";
import useTheme from "./context/ThemeProvider";

export default function App() {

      const {themeMode}=useTheme()

      useEffect(() => {
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
     
      }, [themeMode])
  

  return ( 

      
              <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
                 <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeToggleButton />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
                </div>
              </div>

  
  );
}
