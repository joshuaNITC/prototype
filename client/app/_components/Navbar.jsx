"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DashboardHeader from "../(routes)/dashboard/_components/DashboardHeader";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "dashboard",
    },
    // {
    //   id: 2,
    //   link: "about",
    // },
    {
      id: 2,
      link: "data",
    },
    // {
    //   id: 4,
    //   link: "docs",
    // },
    // {
    //   id: 5,
    //   link: "contact",
    // },
  ];

  // Function to hide nav on resize
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black nav fixed md:sticky">
      {/* addign fixed caused problem */}
      <div>
        <Image
          //   src={"/logo.svg"}
          src={"/logo_nitc.png"}
          width={100}
          height={100}
          alt="logo"
          className="w-[50px] md:w-[60px] p-1"
        />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline flex flex-col justify-center"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
        <li
          key={"dashboardHeader"}
          className="nav-links cursor-pointer flex flex-col justify-center"
        >
          <DashboardHeader />
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;