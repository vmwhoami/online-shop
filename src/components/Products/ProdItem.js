import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProdImages from './ProdImages';

const ProdItem = ({
  prod, photo, category, parent,
}) => {
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
          <div className="product-container d-flex flex-column">
            <span className="product-category">
              {category.name}
              /
              {parent.name}
            </span>
            <span className="product-price">
              {price}
              $
            </span>
            <span className="product-quantity">
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
  parent: PropTypes.instanceOf(Object).isRequired,
};

export default ProdItem;
