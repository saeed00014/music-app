import Link from "next/link";
import React from "react";
import { MdHeadphones } from "react-icons/md";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <MdHeadphones className="text-[2.5rem] text-red-500 " />
      <span className="">موزیک اپ</span>
    </Link>
  );
};

export default Logo;
