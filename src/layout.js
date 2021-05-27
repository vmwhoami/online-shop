import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer';
import CartDetails from './components/CartDetails';

const Layout = ({ children }) => (
  <Container fluid className="px-0 w-100">
    <NavBar />
    <CartDetails />
    {children}
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
