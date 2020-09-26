import React from "react";
import SideBar from "components/sidebar";
import { Header } from "components/header";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
`;

export const Layout: React.FC = ({ children }) => {
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
