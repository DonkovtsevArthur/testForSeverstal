import React from "react";
import ClearText from "ui/icons/ClearText";
import { FormValueWrapper, FormWrapperElement } from "..";
import { ClearIcon, TextareaValue, Label } from "./styles";

type TextareaType = {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClear?: () => void;
};

const Textarea: React.FC<TextareaType> = ({
  label = "",
  value = "",
  placeholder = "",
  onChange = () => {},
  onClear = () => {},
}) => {
  return (
    <FormWrapperElement>
      {label && <Label>{label}</Label>}

      <FormValueWrapper>
        <TextareaValue value={value} placeholder={placeholder} onChange={onChange} />
        <ClearIcon onClick={onClear}>
          <ClearText />
        </ClearIcon>
      </FormValueWrapper>
    </FormWrapperElement>
  );
};

export default Textarea;
