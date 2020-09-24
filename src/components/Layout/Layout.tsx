import React from "react";
import Header from "components/Header";

import { ContentWrapper, LayoutWrapper, Content } from "./styles";
import SideBar from "components/SideBar";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>
        <SideBar />
        <Content>{children}</Content>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
