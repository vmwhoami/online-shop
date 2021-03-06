import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/all';
import { Link, NavLink } from 'react-router-dom';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import LinksData from './links';
import './navbar.scss';
import Victoria from '../SVG';
import { switchLogin, switchCart, switchRegister } from '../../redux/ui/uiActions';
// import { signOut } from '../../redux/user/uesrActions';

const NavBar = ({ mainpage }) => {
  const dispatch = useDispatch();

  // const logoutUser = () => {
  //   dispatch(signOut());
  // };

  const openCart = () => {
    dispatch(switchCart());
  };

  const openLogin = () => {
    dispatch(switchLogin());
  };

  const openRegister = () => {
    dispatch(switchRegister());
  };

  return (
    <header className="header header-dark header">
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="dark"
        className={`${mainpage ? 'transparent' : 'black'}`}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="col">
              {LinksData.map((link) => {
                const { id, title, path } = link;
                return (
                  <NavLink key={id} to={path} className="text-uppercase faded px-2">{title}</NavLink>
                );
              })}
            </Nav>
            <Navbar.Brand className="col d-lg-flex justify-content-center logo">
              <Link to="/">
                <Victoria />
              </Link>
            </Navbar.Brand>

            <Nav className="col justify-content-start   flex-row  justify-content-sm-start justify-content-lg-end ">
              <Nav.Link className="text-uppercase mr-2" onClick={openLogin}>Login</Nav.Link>
              <Nav.Link className="text-uppercase mr-2" onClick={openRegister}>Register</Nav.Link>

              <Nav.Link onClick={openCart} eventKey={2} className="text-uppercase faded d-flex align-items-center p-1 border border-white">

                <span className="px-1">Cart</span>
                <span className="svg">
                  {' '}
                  <FaShoppingCart />
                  {' '}
                </span>
              </Nav.Link>
              <Nav.Link
                onClick={openCart}
                eventKey={2}
                className="text-uppercase .faded d-flex align-items-center py-0 px-4 border border-white  "
              >
                0
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

NavBar.defaultProps = {
  mainpage: false,
};
NavBar.propTypes = {
  mainpage: PropTypes.bool,
};

export default NavBar;
