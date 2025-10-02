import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.add("light");
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    return <button onClick = {toggleTheme}
    className = {cn(
        "fixed top-20 right-9 sm:top-17  sm:right-10 p-2 rounded-full transition-colors duration-300 z-50 cursor-pointer",
        "focus:outline-none bg-primary-2 sm:block"
    )}>
        {" "}{isDarkMode ? <Sun className=" h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 text-cyan-300 hover:text-white duration-300"/ > : <Moon className="h-4.5 w-4.5 text-black hover:text-cyan-400 duration-300"/>}</button>
}