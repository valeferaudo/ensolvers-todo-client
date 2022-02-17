import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteTodo = ({ component: RouteComponent, ...rest }) => {

  useEffect(() => {
  },);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        sessionStorage.getItem('isAuthenticated') === 'true' ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/forbidden'} />
        )
      }
    />
  );
};

export default PrivateRouteTodo;