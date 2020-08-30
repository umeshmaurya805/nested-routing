import React from "react";
import "./styles.css";
import { Login } from "./Login";
import { Edusmith } from "./Edusmith";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3>hey</h3>
        <Switch>
          <Route path="/edusmith" component={Edusmith} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
