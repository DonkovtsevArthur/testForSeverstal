import styled from "styled-components";
import { device } from "theme/respond";
import { FormControl } from "ui/form-control";

export const UploadImageControl = styled(FormControl)`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  + label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 55px;
    width: 157px;
    margin-left: 0;
    margin-top: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.blueLight};
    border-radius: 5px;
    margin-bottom: 0;
    padding: 0 30px;
    border: 1px solid transparent;
    transition: border-color 0.25s ease, color 0.55s ease, background-color 0.55s ease;

    @media ${device.tablet} {
      margin-left: 15px;
      margin-top: 0;
    }
    @media ${device.desktop} {
      margin-left: 25px;
    }
  }

  &:focus {
    + label {
      border-color: ${({ theme }) => theme.colors.blueStroke};
    }
  }

  &:hover {
    + label {
      background-color: ${({ theme }) => theme.colors.blueLilac};
    }
  }

  &:active {
    + label {
      background-color: ${({ theme }) => theme.colors.blueDarkLight};
    }
  }

  &:disabled {
    + label {
      color: ${({ theme }) => theme.colors.blueDisabledText};
      background-color: ${({ theme }) => theme.colors.blueGrey};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.blueDisabledText};
        }
      }
    }
  }
`;
