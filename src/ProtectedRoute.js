import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <AuthContext>
      {({ isAuth }) => (
        <Route
          render={props =>
            isAuth ? <Component {...props} /> : <Redirect to="/usuario" />
          }
          {...rest}
        />
      )}
    </AuthContext>
  )

export default ProtectedRoute;