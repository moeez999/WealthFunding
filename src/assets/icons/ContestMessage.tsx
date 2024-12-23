import React from "react";

interface ContestMessageProps {
  strokeColor?: string; // Optional prop for stroke color
}

const ContestMessage: React.FC<ContestMessageProps> = ({
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
          d="M2.30901 11.7187C1.33301 10.938 1.33301 10.3473 1.33301 7.83333C1.33301 5.31933 1.33301 4.062 2.30901 3.28133C3.28634 2.5 4.85701 2.5 7.99967 2.5C11.1423 2.5 12.7137 2.5 13.6897 3.28133C14.6663 4.062 14.6663 5.31933 14.6663 7.83333C14.6663 10.3473 14.6663 10.938 13.6897 11.7187C12.7143 12.5 11.1423 12.5 7.99967 12.5C6.32634 12.5 5.46634 13.6587 3.99967 14.5V12.3587C3.27034 12.25 2.73367 12.0587 2.30901 11.7187Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ContestMessage;
