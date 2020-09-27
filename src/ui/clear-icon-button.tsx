import { cancelBlurElement } from "library/cancel-blur-element";
import React from "react";
import styled, { css } from "styled-components";
import { ClearIcon } from "./icons/clear";

export const Button = styled.button<{ isError?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;

  width: 55px;
  height: 55px;

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
`;

type Props = {
  onClick?: () => {};
  isError?: boolean;
};

export const ClearIconButton: React.FC<Props> = ({ onClick = () => {}, isError }) => {
  return (
    <Button onClick={onClick} isError={isError} onMouseLeave={cancelBlurElement}>
      <ClearIcon />
    </Button>
  );
};
