import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <div>Page</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
