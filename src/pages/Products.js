import React from 'react';
import { Container } from 'react-bootstrap';
import ProdDetails from '../components/Products/ProdDetail';
import Layout from '../layout';
import BreadCrubs from '../components/UIcomp/BreadCrubs';
import CategoryTitle from '../components/UIcomp/CategoryTitle';

// import PropTypes from 'prop-types';

const Products = () => (
  <Layout>
    <Container>
      <BreadCrubs first="Products" />
      <CategoryTitle category="Yifu" quantity={20} />
      <ProdDetails />
    </Container>
  </Layout>
);

// Products.propTypes = {

// };

export default Products;
