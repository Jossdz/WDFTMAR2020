import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Secret from "./pages/Secret";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const Home = () => <h1>Home</h1>;
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
    </Switch>
  </Router>
);

export default AppRouter;
