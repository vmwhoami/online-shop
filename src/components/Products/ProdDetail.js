import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import destructureObjs from '../../utils/destructureObj';
import ProdItem from './ProdItem';

const ProdDetail = () => {
  const products = useSelector((state) => state.productsReducer.products?.data.products);
  let product;
  if (products) {
    product = destructureObjs(products);
  }

  return (
    <Col lg={9}>
      <Row className="gutter-2 gutter-lg-3">
        <Col className="col-6 col-md-4">
          {product && product.map((prod) => <ProdItem key={prod.id} prod={prod} />)}
        </Col>
      </Row>
    </Col>

  );
};

export default ProdDetail;
