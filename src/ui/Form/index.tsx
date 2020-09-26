import styled, { css } from "styled-components";

const FormWrapperElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormValueWrapper = styled.div<{ isError?: boolean; textError?: string }>`
  position: relative;
  width: 100%;

  ${({ isError, textError = "" }) => {
    return (
      isError &&
      css`
        &::after {
          content: ${() => `"${textError ? textError : ""}"`};
          position: absolute;
          right: 0;
          bottom: -20px;
          color: ${({ theme }) => theme.colors.red};
        }
      `
    );
  }};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 10px;
  font-weight: normal;
`;

const InputValue = styled.input<{ isError?: boolean }>`
  height: 55px;
  ${({ isError }) => {
    return (
      isError &&
      css`
        border-color: ${({ theme }) => theme.colors.red};

        &:focus {
          border-color: ${({ theme }) => theme.colors.red};
        }
      `
    );
  }}
`;

export { FormWrapperElement, FormValueWrapper, Label, InputValue };
