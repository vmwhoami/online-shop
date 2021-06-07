import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import destructureObjs from '../../utils/destructureObj';
import ProdItem from './ProdItem';
import './products.scss';

const ProdDetail = () => {
  const products = useSelector((state) => state.productsReducer.products?.data.products);
  const photos = useSelector((state) => state.productsReducer.products?.data.photos);
  const cat = useSelector((state) => state.productsReducer.products?.data.categories);
  let product; let foto; let categories;
  if (products && photos) {
    foto = destructureObjs(photos);
    product = destructureObjs(products);
    categories = destructureObjs(cat);
  }

  return (
    <Col lg={9} className="mt-5">
      <Row className="gutter-2 gutter-lg-3">
        {product && product.map((prod) => {
          const photo = foto.filter((photObj) => photObj.product_id === prod.id);
          const category = categories.find((catObj) => catObj.id === prod.category);
          const parent = categories.find((catObj) => category.parent === catObj.id);

          return (
            <ProdItem
              key={prod.id}
              prod={prod}
              photo={photo}
              category={category}
              parent={parent}
            />
          );
        })}

      </Row>
    </Col>

  );
};

export default ProdDetail;
