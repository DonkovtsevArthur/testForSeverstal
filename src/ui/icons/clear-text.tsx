import React from "react";
import styled, { css } from "styled-components";
import { Icons } from "./type";

const ClearTextWrapper = styled.div<{ isError?: boolean }>`
  svg {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid;
    border-color: transparent;
    transition: border-color 0.25s ease;

    path {
      transition: stroke 0.25s ease;
      stroke: ${({ theme }) => theme.colors.blueLight};
    }

    &:focus {
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.blueStroke};
      box-sizing: border-box;
    }

    &:hover {
      path {
        stroke: ${({ theme }) => theme.colors.blueStroke};
      }
    }

    &:active {
      path {
        stroke: ${({ theme }) => theme.colors.blueDarkLight};
      }
    }

    &:disabled {
      path {
        stroke: ${({ theme }) => theme.colors.blueGrey};
      }
    }

    ${({ isError }) => {
      return (
        isError &&
        css`
          path {
            stroke: ${({ theme }) => theme.colors.blueGrey};
          }
        `
      );
    }}
  }
`;

interface IClearText extends Icons {
  isError?: boolean;
}

export const ClearText: React.FC<IClearText> = ({ width = "55", height = "55", isError }) => {
  return (
    <ClearTextWrapper isError={isError}>
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
