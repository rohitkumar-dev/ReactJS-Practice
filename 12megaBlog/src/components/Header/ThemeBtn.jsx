import React from "react";
import useTheme from "../customHooks/useTheme";

function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={()=>(setTheme(theme==="dark"? "light" : "dark"))} className="h-full px-3  bg-red-600 text-white rounded-3xl cursor-pointer">
        THE
    </button>
  )
}

export default ThemeBtn;
