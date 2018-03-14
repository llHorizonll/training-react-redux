import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routes from '../utils/routes';
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} >
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.main}
                    />
                ))}
            </Component>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)