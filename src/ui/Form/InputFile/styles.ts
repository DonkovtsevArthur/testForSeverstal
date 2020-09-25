import styled from "styled-components";
import { FormWrapperElement, InputValue } from "..";

const FormWrapperElementFile = styled(FormWrapperElement)`
  position: relative;
  width: auto;
`;

const InputValueFile = styled(InputValue)`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  + label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 55px;
    width: 157px;
    margin-left: 25px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.blueLight};
    border-radius: 5px;
    margin-bottom: 0;
    padding: 0 31px;
  }
`;

const HelperText = styled.div`
  position: absolute;
  top: -1px;
  right: -243px;
  width: 200px;
  height: 62px;
  p {
    color: ${({ theme }) => theme.colors.blueLight};
    font-family: ${({ theme }) => theme.fonts.RobotoItalic};
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;
export { InputValueFile, FormWrapperElementFile, HelperText };
