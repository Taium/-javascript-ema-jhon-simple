import React, { useContext } from 'react';
import { usercontext } from '../../App';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser,setLoggedInUser]=useContext(usercontext);
    return (
        <div>
         
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />


        </div>
    );
};

export default PrivateRoute;