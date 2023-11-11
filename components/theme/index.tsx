"use client";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import {MoonIcon, SunIcon } from "../Icons";
import { cx } from "@/utils/cx";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}  
    className={cx("w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1", 
    theme === "dark" ? "bg-white text-black" :
    "bg-black text-white" )}>
      {
        theme === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
      }
    </button>
  );
}
