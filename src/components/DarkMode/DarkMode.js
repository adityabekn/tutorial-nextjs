"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="flex justify-between relative w-14 border-2 border-gray-600 rounded-2xl"
    >
      <div className="">🌙</div>
      <div className="">🔆</div>
      <div
        className={`w-5 h-5 m-0.5 bg-green-200 absolute rounded-full transition-all duration-300 ease-in-out ${
          theme === "light" ? "left-0" : "left-7"
        }`}
      />
    </button>
  );
};

export default DarkMode;
