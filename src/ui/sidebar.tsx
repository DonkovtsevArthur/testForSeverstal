import { Analyst } from "pages/analyst";
import { Push } from "pages/push";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { AnalystIcon } from "./icons/analyst";
import { PushIcon } from "./icons/push";

const SideBarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 32px 38px 0 0;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 0px 10px 10px 0px;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blueLight};
  padding-left: 31px;
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

type SideBarType = {
  readonly title: string;
  readonly Icon: any;
  readonly code: string;
  readonly Component: React.FC;
};

export const sidebar: SideBarType[] = [
  { title: "Аналитика", code: "", Icon: AnalystIcon, Component: Analyst },
  { title: "Уведомления", code: "push", Icon: PushIcon, Component: Push },
];

export const SideBar = () => {
  return (
    <SideBarStyled>
      {sidebar.map(({ title, Icon, code }) => (
        <LinkStyled
          to={`/${code}`}
          key={title}
          isActive={getIsActive(code)}
          onMouseLeave={(e) => e.currentTarget.blur()}
        >
          <Icon />
          {title}
        </LinkStyled>
      ))}
    </SideBarStyled>
  );
};

// helpers
type LocationType = {
  pathname: string;
};

// определяем по урлу какой выбран пункт из sidebar
function getIsActive(href: string) {
  return (_: any, location: LocationType): boolean => {
    const [firstHref] = location.pathname.split("/").filter((path) => path);
    const parentHref = href.replace("/", "");

    if (!parentHref && !firstHref) {
      return true;
    }
    return firstHref === parentHref;
  };
}
