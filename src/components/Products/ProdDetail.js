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
    <Col lg={9} className="mt-5">
      <Row className="gutter-2 gutter-lg-3">
        {product && product.map((prod) => {
          const photo = foto.filter((photObj) => photObj.product_id === prod.id);
          return <ProdItem key={prod.id} prod={prod} photo={photo} />;
        })}

      </Row>
    </Col>

  );
};

export default ProdDetail;
