import styled from "styled-components";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue};
`;

const UserAvatar = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lavenderLight};
  margin: 0 20px;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  svg {
    display: flex;
    transition: transform 0.25s ease;
  }
  cursor: pointer;

  path {
    transition: fill 0.65s ease;
  }
  &:hover {
    svg {
      transform: rotate(180deg);
    }
    path {
      fill: ${({ theme }) => theme.colors.blueSvgHover};
    }
  }
  &:active {
    path {
      fill: ${({ theme }) => theme.colors.blueSvgActive};
    }
  }
  &:focus {
    path {
      fill: ${({ theme }) => theme.colors.blueSvgHover};
      stroke: ${({ theme }) => theme.colors.blueStroke};
    }
  }
`;

export { UserWrapper, UserName, UserAvatar, UserMenu };
