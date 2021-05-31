import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import destructureObjs from '../../utils/destructureObj';
import ProdItem from './ProdItem';

const ProdDetail = () => {
  const products = useSelector((state) => state.productsReducer.products?.data.products);
  const photos = useSelector((state) => state.productsReducer.products?.data.photos);
  let product; let foto;
  if (products && photos) {
    foto = destructureObjs(photos);
    product = destructureObjs(products);
  }

  return (
    <Col lg={9}>
      <Row className="gutter-2 gutter-lg-3">
        <Col className="col-6 col-md-4">
          {product && product.map((prod) => {
            const photo = foto.find((photObj) => photObj.product_id === prod.id);
            return <ProdItem key={prod.id} prod={prod} photo={photo} />;
          })}
        </Col>
      </Row>
    </Col>

  );
};

export default ProdDetail;