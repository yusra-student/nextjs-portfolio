import Link from "next/link";
import React from "react";

// Define the props for the NavLink component
interface NavLinkProps {
  href: string;
  title: string;
}

// Define the NavLink component with props
const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
