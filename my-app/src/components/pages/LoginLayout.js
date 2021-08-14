import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const LoginLayout = ({ children }) => <>{children}</>

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LoginLayout>
          <Component {...matchProps} />
        </LoginLayout>
      )}
    />
  )
}

export default LoginLayoutRoute
