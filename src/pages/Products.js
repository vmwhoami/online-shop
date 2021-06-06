import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import ProdDetails from '../components/Products/ProdDetail';
import Layout from '../layout';
import BreadCrubs from '../components/UIcomp/BreadCrubs';
import CategoryTitle from '../components/UIcomp/CategoryTitle';
import Aside from '../components/aside/Aside';
import destructureObjs from '../utils/destructureObj';
// import PropTypes from 'prop-types';

const Products = () => {
  const prod = useSelector((state) => state.productsReducer.products?.data.products);
  let products;
  if (prod) products = destructureObjs(prod).length;
  return (
    <Layout>
      <Container>
        <BreadCrubs first="Products" />
        <CategoryTitle category="Men" quantity={products} />
        <Row className="gutter-4">
          <Aside />
          <ProdDetails />
        </Row>
      </Container>
    </Layout>
  );
};

// Products.propTypes = {

// };

export default Products;
