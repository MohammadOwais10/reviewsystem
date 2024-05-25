import { StarProps } from "@/types/StarProps";
import React from "react";

const Star: React.FC<StarProps> = ({ filled, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={`h-8 w-8 cursor-pointer outline-none ${
        filled ? "text-yellow-500" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 24 24"
      role="button"
      aria-label={filled ? "Filled Star" : "Empty Star"}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? onClick() : null)}>
      <path d="M12 .587l3.668 7.431 8.332 1.209-6.046 5.889 1.424 8.284L12 18.9l-7.378 3.9 1.424-8.284L.597 9.227l8.332-1.209z" />
    </svg>
  );
};

export default Star;
