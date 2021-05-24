import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CartDetails from './components/CartDetails'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <CartDetails />
      {children}
      <Footer />
    </>
  )
}


export default Layout