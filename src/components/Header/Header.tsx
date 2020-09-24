import React from "react";
import { HeaderWrapper, Logo } from "./styles";
import logo from "assets/images/logo.svg";
import UserLK from "components/UserLK";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <UserLK />
    </HeaderWrapper>
  );
};

export default Header;
