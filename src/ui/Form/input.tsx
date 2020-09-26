import React, { memo } from "react";
import styled from "styled-components";
import ClearText from "ui/icons/ClearText";
import { FormWrapperElement, Label, FormValueWrapper, InputValue } from ".";

type Input = {
  label?: string;
  value?: string;
  placeholder?: string;
  textError?: string;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

const ClearIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Input: React.FC<Input> = ({
  label = "",
  value = "",
  placeholder = "",
  textError = "Ошибка",
  isError,
  onChange = () => {},
  onClear = () => {},
}) => {
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

export default memo(Input);
