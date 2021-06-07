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
          <h3 className="product-title font-weight-normal text-uppercase">
            <Link to={`/product/${id}`}>
              {name}
            </Link>
          </h3>
          <div className="product-container d-flex flex-column">
            <div className="d-flex w-100 justify-content-between">
              <span className="product-category font-weight-light  ">
                {category.name}
                /
                {parent.name}
              </span>

              <span className="product-price font-weight-light text-right">

                {' '}
                {price}
                $
              </span>
            </div>
            <span className="product-quantity font-weight-light">
              {quantity}
              {' '}
              left
            </span>
            <Button className="product-action rounded-0 text-uppercase py-3 text-dark">
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
