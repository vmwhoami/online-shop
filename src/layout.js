import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { getProducts } from './redux/products/productsActions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Cart />
      <Container fluid className="px-0 w-100">
        <NavBar />
        {children}
        <Footer />
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
