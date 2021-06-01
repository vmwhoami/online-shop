import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProdItem = ({ prod, photo }) => {
  const {
    id, name, category, price, quantity,
  } = prod;

  return (
    <div className="product">

      <figure className="product-image">
        <Link to={`/product/${id}`}>
          <img src={photo.url} alt={name} />
        </Link>
      </figure>
      <div className="product-meta">
        <h3 className="product-title">
          {' '}
          <Link to={`/product/${id}`}>
            {name}
          </Link>
        </h3>
        <div className="product-price">
          <span>{price}</span>
          <span>
            {category}
          </span>

          <span>
            {' '}
            {quantity}
          </span>
          <Button className="product-action">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
ProdItem.defaultProps = {
  photo: { url: 'empty' },
};

ProdItem.propTypes = {
  prod: PropTypes.instanceOf(Object).isRequired,
  photo: PropTypes.instanceOf(Object),
};

export default ProdItem;
