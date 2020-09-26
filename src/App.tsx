import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import { sidebar } from "components/SideBar/SideBar";

function App() {
  return (
    <Layout>
      <Switch>
        {sidebar.map(({ title, code, Component }) => (
          <Route exact={!code} path={`/${code}`} key={title} component={Component} />
        ))}
      </Switch>
    </Layout>
  );
}

export default App;
