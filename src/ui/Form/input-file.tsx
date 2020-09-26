import React, { memo } from "react";
import OverviewIcon from "ui/icons/OverviewIcon";
import styled from "styled-components";
import { FormWrapperElement, InputValue, Label } from ".";

const FormWrapperElementFile = styled(
  
)`
  position: relative;
  width: auto;
`;

const InputValueFile = styled(InputValue)`
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
    margin-left: 25px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.blueLight};
    border-radius: 5px;
    margin-bottom: 0;
    padding: 0 30px;
    border: 1px solid transparent;
    transition: border-color 0.25s ease, color 0.55s ease, background-color 0.55s ease;
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

const HelperText = styled.div`
  position: absolute;
  top: -1px;
  right: -243px;
  width: 200px;
  height: 62px;
  p {
    color: ${({ theme }) => theme.colors.blueLight};
    font-family: ${({ theme }) => theme.fonts.RobotoItalic};
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

type InputFileType = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputFile: React.FC<InputFileType> = memo(({ label = "", onChange = () => {} }) => {
  return (
    <FormWrapperElementFile>
      <InputValueFile id="file" type="file" accept=".png" onChange={onChange} />
      <Label htmlFor="file">
        <OverviewIcon />
        {label}
      </Label>
      <HelperText>
        <p> Значок в высоком разрешении</p>
        <p>512х512 px; 32-разрядный PNG</p>
      </HelperText>
    </FormWrapperElementFile>
  );
});
