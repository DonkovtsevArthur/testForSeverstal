import { cancelBlurElement } from "library/cancel-blur-element";
import { Analyst } from "pages/Analyst";
import { Push } from "pages/Push";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "theme/respond";
import { AnalystIcon } from "ui/icons/analyst";
import { PushIcon } from "ui/icons/push";

const SideBarStyled = styled.nav<{ isShowMenu: boolean }>`
  position: sticky;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: width 0.65s ease;
  width: 12%;
  padding: 0 2px;

  @media ${device.tablet} {
    padding: 32px 5px 0 0;
  }
  @media ${device.desktop} {
    width: ${({ isShowMenu }) => (isShowMenu ? "30%" : "12%")};
    padding: 32px 38px 0 0;
  }
  @media ${device.desktopBig} {
    width: ${({ isShowMenu }) => (isShowMenu ? "30%" : "10%")};
    padding: 32px 38px 0 0;
  }
`;

const LinkStyled = styled(NavLink)<{ text: string; isShowMenu: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  height: 60px;
  max-width: 268px;
  border-radius: 0 10px 10px 0px;
  font-family: ${({ theme }) => theme.fonts.RobotoMedium};
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blueLight};
  padding-left: 0;
  border: 1px solid transparent;
  transition: color 0.65s, background-color 0.65s ease;
  justify-content: center;

  &.active {
    color: ${({ theme }) => theme.colors.blue};
   
    path,
    rect,
    circle {
      transition: 0.65s ease;
      stroke: ${({ theme }) => theme.colors.blueStroke};
    }
  }



  @media ${device.tablet} {
    &:active {
    background-color: ${({ theme }) => theme.colors.lavenderLight};
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
  }

  @media ${device.desktop} {
    padding-left: 31px;
    justify-content: flex-start;
  }

  

  &:after {
    content: "${({ text, isShowMenu }) => (isShowMenu ? text : "")}";
    position:absolute;
    top: 50%;
    left: 103px;
    transition: opacity 0.2s ease;
    opacity: ${({ isShowMenu }) => (isShowMenu ? 1 : 0)};
    transform: translate(0, -50%);
    display: none;

    @media ${device.desktop} {
      display: block;
    }
  }

  &:not(:last-child) {
    margin-bottom: 0;
    @media ${device.tablet} {
      margin-bottom: 9px;
    }
  }
  svg {
    path,
    rect,
    circle {
      transition: 0.65s ease;
      stroke: ${({ theme }) => theme.colors.blueLight};
    }
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
  const [isShowMenu, setShowMenu] = useState(true);

  const handleClick = () => {
    console.log("fdfdf");

    setShowMenu((prevState) => !prevState);
  };

  console.log("SideBar -> isShowMenu", isShowMenu);
  return (
    <SideBarStyled onClick={handleClick} isShowMenu={isShowMenu}>
      {sidebar.map(({ title, Icon, code }) => (
        <LinkStyled
          to={`/${code}`}
          key={title}
          isActive={getIsActive(code)}
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={cancelBlurElement}
          text={title}
          isShowMenu={isShowMenu}
          title={title}
        >
          <Icon />
          {/* {isShowMenu && title} */}
        </LinkStyled>
      ))}
    </SideBarStyled>
  );
};

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
