"use client";

import Link from "next/link";
import DarkMode from "@/components/DarkMode/DarkMode";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "About",
    url: "/about",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Aditya Bekti
      </Link>
      <div className="flex items-center gap-4">
        {/*<DarkMode></DarkMode>*/}
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button
          className="p-1 bg-green-400 cursor-pointer rounded"
          onClick={() => console.log("Clicked")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
