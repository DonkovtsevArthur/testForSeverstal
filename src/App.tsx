import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import { GlobalStyles } from "theme/global-styles";
import { store } from "store";
import { Layout } from "ui/layout";
import { sidebar } from "ui/sidebar";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
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
      </BrowserRouter>
    </Provider>
  );
}
