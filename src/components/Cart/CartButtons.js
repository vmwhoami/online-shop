import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartButtons = ({ openCloseCart }) => (
  <div className="d-flex w-100 bg-danger ">
    <Link to="/cart" className="btn-grey py-3 w-100 text-center" onClick={() => openCloseCart()}>
      View Cart
    </Link>
    <Link to="/checkout" className="btn-flat py-3 w-100 text-center" onClick={() => openCloseCart()}>
      Checkout
    </Link>
  </div>
);

CartButtons.propTypes = {
  openCloseCart: PropTypes.func.isRequired,
};

export default CartButtons;
