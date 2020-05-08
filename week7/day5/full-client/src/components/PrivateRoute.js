import React from "react";
import { MyContext } from "../context";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <MyContext.Consumer>
      {({ user: { username } }) => (
        <Route
          {...rest}
          render={(props) =>
            username !== "" ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      )}
    </MyContext.Consumer>
  );
}

export default PrivateRoute;
