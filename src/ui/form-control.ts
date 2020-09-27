import styled, { css } from "styled-components";

export const FormControl = styled.input<{ textError?: string }>`
  ${({ textError = "" }) => {
    return (
      textError &&
      css`
        border-color: ${({ theme }) => theme.colors.red};

        &:focus {
          border-color: ${({ theme }) => theme.colors.red};
        }
      `
    );
  }}
`;
