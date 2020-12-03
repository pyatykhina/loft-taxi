import React, { Component, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = (email, password) => {
        if (email === 'test@test.com' && password === '123123') {
            setIsLoggedIn(true);
        }
        return;
    }

    const logOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const withAuth = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <WrappedComponent {...value} {...this.props} />
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}

export const PrivateRoute = withAuth(({
    component: RouteComponent, 
    isLoggedIn
}) => (
    <Route
      render={routeProps =>
        isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
));
