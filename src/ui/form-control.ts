import styled, { css } from "styled-components";

export const FormControl = styled.input<{ isError?: boolean }>`
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
