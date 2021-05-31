import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProdItem = ({ prod }) => {
  const {
    id, name, category, price, quantity,
  } = prod;

  return (
    <div className="product">
      <figure className="product-image">
        <h2>{name}</h2>
      </figure>
    </div>
  );
};
ProdItem.propTypes = {
  prod: PropTypes.instanceOf(Object).isRequired,

};

export default ProdItem;
