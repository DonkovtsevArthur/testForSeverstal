import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 64px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blueStroke};
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: 500;
  line-height: 19px;

  transition: border-color 0.25s ease, background-color 0.35s ease, color 0.25s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blueVeryDark};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueSuperDark};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.blueMediumLight};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.blueDisabledText};
    background-color: ${({ theme }) => theme.colors.blueGrey};
  }
`;

export { Button };
