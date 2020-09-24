import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 32px 38px 0 0;
`;

const SideBarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 0px 10px 10px 0px;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  color: ${({ theme }) => theme.colors.blueLight};
  padding-left: 32px;
  border: 1px solid transparent;
  transition: color 0.65s, background-color 0.65s ease;
  &:not(:last-child) {
    margin-bottom: 9px;
  }

  svg {
    margin-right: 38px;

    path,
    rect,
    circle {
      transition: 0.65s ease;
      stroke: ${({ theme }) => theme.colors.blueLight};
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.lavenderLight};

    path,
    rect,
    circle {
      transition: 0.65s ease;
      stroke: ${({ theme }) => theme.colors.blueStroke};
    }
  }

  &:hover {
    svg {
    }
    color: ${({ theme }) => theme.colors.blueLight};
    background-color: ${({ theme }) => theme.colors.lavenderLight};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blueLight};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.blueVeryLight};
  }
`;

export { SideBarWrapper, SideBarLink };
