import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProdDetails from '../components/Products/ProdDetail';
import Layout from '../layout';
import BreadCrubs from '../components/UIcomp/BreadCrubs';
import CategoryTitle from '../components/UIcomp/CategoryTitle';
import Aside from '../components/aside/Aside';

// import PropTypes from 'prop-types';

const Products = () => (
  <Layout>
    <Container>
      <BreadCrubs first="Products" />
      <CategoryTitle category="Men" quantity={10} />
      <Row className="gutter-4">
        <Aside />
        <ProdDetails />
      </Row>
    </Container>
  </Layout>
);

// Products.propTypes = {

// };

export default Products;
