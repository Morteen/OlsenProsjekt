import React from "react";
import { Route, IndexRoute } from "react-router";
import { Switch } from "react-router-dom";
import app from "./components/app";
import Greeting from "../Client/components/Greeting";
import signupPage from "./components/signup/signupPage";
import LoginPage from "./components/Login/LoginPage";
import About from "./components/About";
import Fylling from "./components/Fylling/Fylling";
import Timeliste from "./components/Timeliste/Timeliste";
import MineTimer from "./components/Timeliste/MineTimer";
import PageNotFound from "./components/PageNotFound";
import DevelopSite from "./components/DevelopSite";
import MaintenancePage from "./components/Maintenance/MaintenancePage";
import VelkommenNotLoggedIN from "./components/Velkommen/VelkommenNotLoggedIN";

export default (
  <Switch>
    <Route path="/" component={app}>
      <IndexRoute component={VelkommenNotLoggedIN} />;
      <Route path="signup" component={signupPage} />
      <Route path="Login" component={LoginPage} />
      <Route path="About" component={About} />
      <Route path="Fylling" component={Fylling} />
      <Route path="Timeliste" component={Timeliste} />
      <Route path="MineTimer" component={MineTimer} />
      <Route path="DevelopSite" component={DevelopSite} />
      <Route path="MaintenancePage" component={MaintenancePage} />
      <Route component={PageNotFound} />
    </Route>
  </Switch>
);
