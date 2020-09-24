import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <div>Page</div>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
