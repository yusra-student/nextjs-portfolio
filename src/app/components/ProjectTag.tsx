import React from "react";

// Define the props for the ProjectTag component
interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void; // onClick is a function that takes a string and returns void
  isSelected: boolean; // isSelected is a boolean
}

// Define the ProjectTag component with props
const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
