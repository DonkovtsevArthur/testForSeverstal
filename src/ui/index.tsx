import styled, { css } from "styled-components";
import { device } from "theme/respond";

export const Label = styled.label`
  display: flex;
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 10px;
  font-weight: normal;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div<{ textError?: string }>`
  position: relative;
  ${({ textError = "" }) => {
    return (
      textError &&
      css`
        &::after {
          content: ${() => `"${textError ? textError : ""}"`};
          position: absolute;
          right: 0;
          bottom: -20px;
          color: ${({ theme }) => theme.colors.red};
          font-size: 14px;
          @media ${device.tablet} {
            font-size: 16px;
          }
        }
      `
    );
  }}
`;

export const FormControlWrapper = styled.div<{ textError?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 22px;

  @media ${device.desktop} {
    width: 685px;
  }

  ${({ textError = "" }) => {
    return (
      textError &&
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
