import React from "react";

interface ContestHamburgerProps {
  strokeColor?: string;
}

const ContestHamburger: React.FC<ContestHamburgerProps> = ({
  strokeColor = "white",
}) => {
  return (
    <div>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 11.8334H14M2 8.50008H14M2 5.16675H14"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ContestHamburger;
