import React from "react";
import { Icons } from "../type";
import { ClearTextWrapper } from "./styles";

const ClearText: React.FC<Icons> = ({ width = "55", height = "55" }) => {
  return (
    <ClearTextWrapper>
      <svg width={width} height={height} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M34 20L20 34M20 20L34 34"
          stroke="#E0E7F8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ClearTextWrapper>
  );
};

export default ClearText;
