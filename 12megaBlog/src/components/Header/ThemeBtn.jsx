import React from "react";
import useTheme from "../customHooks/useTheme";

function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={()=>(setTheme(theme==="dark"? "light" : "dark"))} className="h-full px-3  bg-amber-800 rounded-3xl">
        THE
    </button>
  )
}

export default ThemeBtn;
