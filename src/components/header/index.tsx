import React from "react";
import UserLK from "components/user-info";
import styled from "styled-components";
import logo from "assets/images/logo.svg";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 32px;
  box-shadow: 0px 10px 50px rgba(224, 231, 248, 0.5);
`;

const Logo = styled.img``;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <UserLK />
    </HeaderWrapper>
  );
};
