import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProdImages from './ProdImages';

const ProdItem = ({ prod, photo, category }) => {
  const {
    id, name, price, quantity,
  } = prod;

  return (
    <Col md={4} className="col-6">
      <div className="product">
        <Link to={`/product/${id}`}>
          <ProdImages photo={photo} />
        </Link>
        <div className="product-meta">
          <h3 className="product-title">
            <Link to={`/product/${id}`}>
              {name}
            </Link>
          </h3>
          <div className="product-price">
            <span>
              {price}
              $
            </span>
            <span>
              {category.name}
            </span>
            <span>
              {quantity}
              {' '}
              Left
            </span>
            <Button className="product-action">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
ProdItem.defaultProps = {
  photo: [{ url: 'empty' }],
};

ProdItem.propTypes = {
  prod: PropTypes.instanceOf(Object).isRequired,
  photo: PropTypes.instanceOf(Array),
  category: PropTypes.instanceOf(Object).isRequired,
};

export default ProdItem;
