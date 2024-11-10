import React from "react";
import NavLink from "./NavLink";

// Define the type for the link object
interface Link {
  path: string;
  title: string;
}

// Define the props for the MenuOverlay component
interface MenuOverlayProps {
  links: Link[];
}

// Define the MenuOverlay component with props
const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
