import styled, { css } from "styled-components";

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 10px;
  font-weight: normal;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div<{ isError?: boolean; textError?: string }>`
  position: relative;
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
  }}
`;

export const FormControlWrapper = styled.div<{ isError?: boolean; textError?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 685px;
  margin-bottom: 22px;

  ${({ isError, textError = "" }) => {
    console.log("textError", textError);
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
