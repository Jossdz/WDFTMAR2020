import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Profile from "./pages/Profile";

// Dummy components

const Login = () => <h1>Login</h1>;
const Signup = () => <h1>Signup</h1>;

const AppRouter = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact component={() => <Home projects="project" />} path="/" />
      <Route exact component={Login} path="/login" />
      <Route exact component={Signup} path="/signup" />
      <Route exact component={Profile} path="/search" />
      <Route exact component={Projects} path="/projects" />
      <Route exact component={Project} path="/project/:id" />
    </Switch>
    <footer>with 💙 by joss</footer>
  </Router>
);

export default AppRouter;
