import React from "react";
import ClearText from "ui/icons/ClearText";
import { FormValueWrapper, FormWrapperElement, InputValue, Label } from "..";
import { ClearIcon } from "./styles";

type Input = {
  label?: string;
  value?: string;
  placeholder?: string;
  textError?: string;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

const Input: React.FC<Input> = ({
  label = "",
  value = "",
  placeholder = "",
  textError = "Ошибка",

  isError,
  onChange = () => {},
  onClear = () => {},
}) => {
  console.log("textError", textError);
  return (
    <FormWrapperElement>
      {label && <Label>{label}</Label>}

      <FormValueWrapper isError={isError} textError={textError}>
        <InputValue type="text" value={value} placeholder={placeholder} onChange={onChange} isError={isError} />

        <ClearIcon onClick={onClear}>
          <ClearText isError={isError} />
        </ClearIcon>
      </FormValueWrapper>
    </FormWrapperElement>
  );
};

export default Input;
