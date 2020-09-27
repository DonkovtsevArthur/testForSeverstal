import React from "react";
import styled from "styled-components";
import { Header } from "./header";
import { SideBar } from "./sidebar";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <Container>
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </LayoutStyled>
  );
};
