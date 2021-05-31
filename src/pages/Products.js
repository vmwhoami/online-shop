import React from 'react';
import { Container } from 'react-bootstrap';
import ProdDetails from '../components/Products/ProdDetail';
import Layout from '../layout';

// import PropTypes from 'prop-types';

const Products = () => (
  <Layout>
    <Container>
      <ProdDetails />
    </Container>
  </Layout>
);

// Products.propTypes = {

// };

export default Products;
