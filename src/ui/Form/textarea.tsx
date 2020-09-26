import React, { memo } from "react";
import styled from "styled-components";
import ClearText from "ui/icons/ClearText";
import { FormWrapperElement, FormValueWrapper } from ".";

const Label = styled.label`
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 10px;
`;

const TextareaValue = styled.textarea`
  min-width: 685px;
  max-width: 685px;
  min-height: 87px;
  overflow-x: auto;
`;

const ClearIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

type TextareaType = {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClear?: () => void;
};

export const Textarea: React.FC<TextareaType> = memo(
  ({ label = "", value = "", placeholder = "", onChange = () => {}, onClear = () => {} }) => {
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
  },
);
