import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Secret from "./pages/Secret";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import ProjectDetail from "./pages/ProjectDetail";

const Profile = () => <h1>Profile</h1>;

const AppRouter = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Login} path="/login" />
      <Route exact component={Signup} path="/signup" />
      <PrivateRoute exact component={Secret} path="/secret" />
      <PrivateRoute exact component={Profile} path="/profile" />
      <PrivateRoute exact component={CreateProject} path="/projects/new" />
      <Route exact component={ProjectDetail} path="/projects/:id" />
    </Switch>
  </Router>
);

export default AppRouter;
