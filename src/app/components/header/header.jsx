"use client";
import React, { useState } from "react";
import Logo from "../ui/logo";
import NavLink from "./navLink";
import { IoIosAlbums } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaItunesNote } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed right-0 top-0 left-0 flex justify-center w-full h-[60px] bg-lightMainbg text-white z-40">
      <nav className="relative flex justify-between items-center h-full w-full max-w-[1200px] z-50 bg-lightMainbg">
        <div className="relative flex justify-between items-center md:p-4 py-4 px-2 w-full h-full bg-lightMainbg z-40">
          <Logo />
          <ul className="md:flex hidden gap-4">
            <li>
              <NavLink path="/" name="آهنگ" icon={<FaItunesNote />} />
            </li>
            <li>
              <NavLink path="/" name="هنرمند" icon={<FaUser />} />
            </li>
            <li>
              <NavLink path="/" name="آلبوم" icon={<IoIosAlbums />} />
            </li>
          </ul>
          <span
            onClick={() => setIsOpen((p) => !p)}
            className="md:hidden flex text-4xl pl-1"
          >
            <RxHamburgerMenu />
          </span>
        </div>
        <ul
          className={`absolute ${
            isOpen ? "top-[60px]" : "-top-[200px]"
          } left-0 md:hidden flex flex-col items-start w-full gap-4 bg-lightMainbg px-2 pb-4 duration-500 z-30 [&>li]:w-full`}
        >
          <li>
            <NavLink path="/" name="آهنگ" icon={<FaItunesNote />} />
          </li>
          <li>
            <NavLink path="/" name="هنرمند" icon={<FaUser />} />
          </li>
          <li>
            <NavLink path="/" name="آلبوم" icon={<IoIosAlbums />} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
