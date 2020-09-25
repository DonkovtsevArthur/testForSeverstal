import styled from "styled-components";

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

export { Label, TextareaValue, ClearIcon };
