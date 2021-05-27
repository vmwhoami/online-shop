import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Row } from 'react-bootstrap';
import LinksData from './links';
import style from './navbar.module.css';
import Victoria from '../SVG';
// import PropTypes from 'prop-types';

const NavBar = () => (
  <header className={`header header-dark ${style.header}`}>
    <Container>
      <Row>
        <Nav
          className={`navbar navbar-expand-lg ${style.navbar}`}
        >
          <div className="collapse navbar-collapse order-3 order-lg-1" id="navbarMenu">
            <Link to="/" className={style.logo}>
              <Victoria />
            </Link>
            <ul className="navbar-nav mr-auto">
              {LinksData.map((link) => {
                const { id, title, path } = link;
                return (
                  <Link
                    className="py-2 d-none d-md-inline-block text-uppercase text-light"
                    key={id}
                    to={path}
                  >
                    {title}
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="collapse navbar-collapse order-4 order-lg-3" id="navbarMenu2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link text-uppercase text-light">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      </Row>
    </Container>
  </header>
);

// NavBar.propTypes = {

// };

export default NavBar;
