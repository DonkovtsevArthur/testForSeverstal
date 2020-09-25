import styled from "styled-components";

const FormWrapperElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormValueWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 10px;
  font-weight: normal;
`;

const InputValue = styled.input`
  height: 55px;
`;

export { FormWrapperElement, FormValueWrapper, Label, InputValue };
