import React from 'react';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartButtons = () => (
  <div className="d-flex w-100 bg-danger ">

    <Link to="/cart" className="btn-grey py-3 w-100 text-center">
      View Cart
    </Link>

    <Link to="/cart" className="btn-flat py-3 w-100 text-center">
      Checkout
    </Link>

  </div>
);

export default CartButtons;
