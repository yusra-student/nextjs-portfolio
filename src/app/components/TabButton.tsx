import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Define the props for the TabButton component
interface TabButtonProps {
  active: boolean; // active is a boolean
  selectTab: () => void; // selectTab is a function that returns void
  children: ReactNode; // children can be any renderable node
}

// Define the TabButton component with props
const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={{
          default: { width: 0 },
          active: { width: "calc(100% - 0.75rem)" },
        }}
        className="h-1 bg-primary-500 mt-2 mr-3"
      />
    </button>
  );
};

export default TabButton;
