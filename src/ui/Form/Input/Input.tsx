import React from "react";
import ClearText from "ui/icons/ClearText";
import { FormValueWrapper, FormWrapperElement, InputValue, Label } from "..";
import { ClearIcon } from "./styles";

type Input = {
  label?: string;
  value?: string;
  placeholder?: string;
};

const Input: React.FC<Input> = ({ label = "", value = "", placeholder = "" }) => {
  return (
    <FormWrapperElement>
      {label && <Label>{label}</Label>}

      <FormValueWrapper>
        <InputValue type="text" value={value} placeholder={placeholder} />

        <ClearIcon>
          <ClearText />
        </ClearIcon>
      </FormValueWrapper>
    </FormWrapperElement>
  );
};

export default Input;
