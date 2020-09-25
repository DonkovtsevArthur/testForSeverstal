import styled from "styled-components";

const ClearTextWrapper = styled.div`
  svg {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid;
    border-color: transparent;
    transition: border-color 0.25s ease;

    path {
      transition: stroke 0.25s ease;
      stroke: ${({ theme }) => theme.colors.blueLight};
    }

    &:focus {
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.blueStroke};
      box-sizing: border-box;
    }

    &:hover {
      path {
        stroke: ${({ theme }) => theme.colors.blueStroke};
      }
    }

    &:active {
      path {
        stroke: ${({ theme }) => theme.colors.blueDarkLight};
      }
    }

    &:disabled {
      path {
        stroke: ${({ theme }) => theme.colors.blueGrey};
      }
    }
  }
`;

export { ClearTextWrapper };
