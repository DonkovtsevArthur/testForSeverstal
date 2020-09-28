import React from "react";
import logo from "assets/images/logo.svg";

import styled from "styled-components";
import { UserInfo } from "../../../ui/user-info";
import { device } from "theme/respond";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  box-shadow: 0px 10px 50px rgba(224, 231, 248, 0.5);

  @media ${device.tablet} {
    padding: 20px 40px 32px;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      <UserInfo />
    </HeaderStyled>
  );
};
