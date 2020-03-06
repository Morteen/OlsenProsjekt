import React from "react";
import { Route, IndexRoute } from "react-router";
import app from "./components/app";
import Greeting from "../Client/components/Greeting";
import signupPage from "./components/signup/signupPage";
import LoginPage from "./components/Login/LoginPage";

export default (
  <Route path="/" component={app}>
    <IndexRoute component={Greeting} />;
    <Route path="signup" component={signupPage} />
    <Route path="Login" component={LoginPage} />
  </Route>
);
/*
        
         <Route path="Login" component={LoginPage}/>
        <Route path="Overtid" component={OvertidPage}/> */