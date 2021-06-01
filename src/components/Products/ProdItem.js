import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProdItem = ({ prod, photo }) => {
  const {
    id, name, category, price, quantity,
  } = prod;

  return (
    <div className="product">
      <figure className="product-image">
        <Link to={`/product/${id}`}>
          <img src={photo.url} alt={name} />
          <h2>{price}</h2>
          <p>{category}</p>
          <p>{quantity}</p>
          <p>{name}</p>
        </Link>
      </figure>
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
