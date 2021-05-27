import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import LinksData from './links';
import style from './navbar.module.css';
import { Victoria, Cart } from '../SVG';
// import PropTypes from 'prop-types';

const NavBar = () => (
  <header className={`header header-dark ${style.header}`}>

    <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col">
            {LinksData.map((link) => {
              const { id, title, path } = link;
              return (
                <Nav.Link key={id} href={path} className="text-uppercase .faded">{title}</Nav.Link>
              );
            })}
          </Nav>
          <Navbar.Brand className={`col d-flex justify-content-center ${style.logo}`}>
            <Link to="/">
              <Victoria />
            </Link>
          </Navbar.Brand>
          <Nav className="col justify-content-end">
            <Nav.Link eventKey={2} className="text-uppercase .faded d-flex align-items-center p-1 border border-white" href="/cart">
              <span className="px-1"> Cart</span>
              <span className={style.svg}>
                {' '}
                <Cart />
              </span>

            </Nav.Link>
            <Nav.Link
              eventKey={2}
              className="text-uppercase .faded d-flex align-items-center py-0 px-4 border border-white  "
              href="/cart"
            >
              0
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  </header>
);

// NavBar.propTypes = {

// };

export default NavBar;
