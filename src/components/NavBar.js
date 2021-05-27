import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import LinksData from './links';
// import PropTypes from 'prop-types';

const NavBar = () => (
  <Nav
    className="sticky-top py-1"
    style={{
      backgroundColor: 'rgba(0, 0, 0, .85)',
    }}
  >
    <Container className="d-flex flex-column flex-md-row justify-content-between">
      {LinksData.map((link) => {
        const { id, title, path } = link;
        return (
          <Link
            className="py-2 d-none d-md-inline-block"
            key={id}
            to={path}
          >
            {title}
          </Link>
        );
      })}

    </Container>
  </Nav>
);

// NavBar.propTypes = {

// };

export default NavBar;
