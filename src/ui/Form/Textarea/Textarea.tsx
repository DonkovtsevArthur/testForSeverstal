import React from "react";
import ClearText from "ui/icons/ClearText";
import { FormValueWrapper, FormWrapperElement } from "..";
import { ClearIcon, TextareaValue, Label } from "./styles";

type TextareaType = {
  label?: string;
  value?: string;
  placeholder?: string;
};

const Textarea: React.FC<TextareaType> = ({ label = "", value = "", placeholder = "" }) => {
  return (
    <FormWrapperElement>
      {label && <Label>{label}</Label>}

      <FormValueWrapper>
        <TextareaValue value={value} placeholder={placeholder} />
        <ClearIcon>
          <ClearText />
        </ClearIcon>
      </FormValueWrapper>
    </FormWrapperElement>
  );
};

export default Textarea;
