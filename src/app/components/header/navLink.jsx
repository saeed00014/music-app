import Link from "next/link";
import React from "react";

const NavLink = ({ path, name, icon }) => {
  return (
    <Link
      href={path}
      className="flex items-center md:gap-4 gap-2 py-1 md:px-4 px-2 w-full hover:bg-navhover rounded-[1rem]"
    >
      <i className="text-[1.3rem]">{icon}</i>
      <span className="text-[1.2rem] pt-1">{name}</span>
    </Link>
  );
};

export default NavLink;
