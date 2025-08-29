import  { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./context/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = ()=>{setThemeMode("light")}
  const darkTheme = ()=>{setThemeMode("dark")}
  //actual change in theme
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
 
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="px-5 dark:bg-gray-800 flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <h1 className="text-center border border-gray-400 dark:border-gray-700 dark:bg-gray-700 dark:text-white p-5 mx-auto mb-4 max-w-sm rounded-lg font-medium">
            Theme Switcher
          </h1>
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
