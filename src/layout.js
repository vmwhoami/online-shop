import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { getProducts } from './redux/products/productsActions';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const Layout = ({ children, mainpage }) => {
  const state = useSelector((state) => state.uiReducer);
  const { loginInput, registerInput } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Cart />
      {loginInput ? <Login /> : null}
      {registerInput ? <Register /> : null}
      <Container fluid className="px-0 w-100 pt-10">
        <NavBar mainpage={mainpage} />
        {children}
        <Footer />
      </Container>
    </>
  );
};
Layout.defaultProps = {
  mainpage: false,
};
Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  mainpage: PropTypes.bool,
};
export default Layout;
