import React from "react";
import { Icons } from "./type";

export const PushIcon: React.FC<Icons> = ({ width = "35", height = "35" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 32L7 25M20.6957 28V25M20.6957 32V31.5M14.3043 27V25M28 29V25"
        stroke="#5285FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="2" y="3" width="31" height="18" rx="3" stroke="#5285FF" strokeWidth="2" />
      <path d="M20 8H28M25 12L28 12M20 12H21M20 16H25" stroke="#5285FF" strokeWidth="2" strokeLinecap="round" />
      <rect x="7" y="8" width="8" height="8" rx="1" stroke="#5285FF" strokeWidth="2" />
    </svg>
  );
};
