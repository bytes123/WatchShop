import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const HomeLayout = ({ children }) => (
  <div className='wrapper'>
    <Header />
    {children}
    <Footer />
  </div>
)

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <HomeLayout>
          <Component {...matchProps} />
        </HomeLayout>
      )}
    />
  )
}

export default HomeLayoutRoute
