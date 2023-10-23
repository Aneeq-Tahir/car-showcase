"use client";

import * as React from "react";
import { LuMoonStar as Moon, LuSun as Sun } from "react-icons/lu";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
   const { theme, setTheme } = useTheme();
   const [darkMode, setMode] = React.useState(
      window.matchMedia("(prefers-color-scheme:dark)").matches
   );

   const handleTheme = () => {
      if (darkMode === true) {
         setTheme("light");
         setMode(false);
      } else {
         setTheme("dark");
         setMode(true);
      }
      if (theme === "light" && darkMode === true) {
         setTheme("dark");
         setMode(true);
      }
   };
   
   return (
      <Button variant={"ghost"} onClick={handleTheme} size="icon">
         <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
         <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
         <span className="sr-only">Toggle theme</span>
      </Button>
   );
}
