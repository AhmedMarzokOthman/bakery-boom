"use client"

import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function DarkModeComponent() {
    const [isDark, setIsDark] = useState(false);


    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    // Check for saved user preference in localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("dark-mode");
        if (savedMode === "enabled") {
            setIsDark(true);
        }
    }, []);

    // Update body class and localStorage on isDark change
    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
            document.body.classList.add("bg-zinc-800");
            document.body.classList.add("transition-all", "duration-500");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.remove("bg-zinc-800");
            document.body.classList.add("transition-all", "duration-500");
            localStorage.setItem("dark-mode", "disabled");
        }
    }, [isDark]);

    return (
        <div className="font-bold font-alexandria cursor-pointer fixed bottom-4 right-4" onClick={toggleDarkMode}>
            {isDark ? <Sun className="" style={{ height: '25px', width: '25px' }} />
                : <Moon className="" style={{ height: '25px', width: '25px' }} />}
        </div>
    )
}