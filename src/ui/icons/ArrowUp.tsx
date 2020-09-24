import React from "react";
import { Icons } from "./type";

const ArrowUpIcon: React.FC<Icons> = ({ fill = "#5285FF", width = "13", height = "8" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.73117 7.87641C5.13031 8.42947 5.95381 8.42946 6.35294 7.87641L10.8932 1.5852C11.3705 0.923839 10.8979 0 10.0823 0H1.00177C0.186166 0 -0.286409 0.923841 0.19089 1.58521L4.73117 7.87641Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowUpIcon;
