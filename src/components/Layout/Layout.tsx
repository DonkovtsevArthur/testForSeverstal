import React from "react";
import Header from "components/Header";

import { LayoutWrapper } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <div>Layout</div>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
