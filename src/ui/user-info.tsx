import React from "react";
import styled from "styled-components";
import { ArrowUpIcon } from "./icons/arrow-up";

const UserStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue};
`;

const Avatar = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lavenderLight};
  margin: 0 20px;
`;

const Menu = styled.div`
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
      fill: ${({ theme }) => theme.colors.blueMediumLight};
    }
  }
  &:active {
    path {
      fill: ${({ theme }) => theme.colors.blueNatural};
    }
  }
  &:focus {
    path {
      fill: ${({ theme }) => theme.colors.blueMediumLight};
      stroke: ${({ theme }) => theme.colors.blueStroke};
    }
  }
`;

export const UserInfo = () => {
  return (
    <UserStyled>
      <UserName>Severstal\av.baruzdin</UserName>
      <Avatar />
      <Menu>
        <ArrowUpIcon />
      </Menu>
    </UserStyled>
  );
};
