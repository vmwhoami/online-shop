import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { getProducts } from './redux/products/productsActions';
import RegAuth from './components/auth/RegAuth';

const Layout = ({ children, mainpage }) => {
  const dispatch = useDispatch();

  const getSmth = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.REACT_APP_API_KEY}`;
    axios.post(url, { token: 'ya29.c.KqABAwhAGaXNShqMuHLTHixBQut0niKJkH0BRAwq_dA226tfP8nAzxt1Qw81aAQbMk7Folm6wK8B6DVO5hPi0Cyozdi-OKKYHW_OucPPo1bi6cD7Ox6yCJ3JlQV_IoJGb_-KG2072edOJHJyMMddW0WGGfRXWT6uRTUFKU6VxJ3DYsOMPsQ8rLxiXAkE8wXtVZvgibUsBCdLI7G3xviepeIDRA', returnSecureToken: true });
  };
  getSmth().then((res) => console.log(res)).catch((err) => console.log(err));
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Cart />
      <RegAuth />
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
