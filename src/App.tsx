import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { sidebar } from "components/SideBar/SideBar";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Switch>
            {sidebar.map(({ title, code, Component }) => (
              <Route exact={!code} path={`/${code}`} key={title} component={Component} />
            ))}
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
