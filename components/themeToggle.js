"use client";
import { useEffect, useState } from "react";
import DarkIcon from "./ui-components/darkIcon";
import LightIcon from "./ui-components/lightIcon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for stored theme or system preference
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Persist the user's choice
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 h-[40px] w-[40px] rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <span className="">
        {theme === "light" ? <DarkIcon /> : <LightIcon />}
      </span>
    </button>
  );
}
