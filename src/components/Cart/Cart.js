import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import style from './cart.module.css';
import switchCart from '../../redux/cart/cartActions';
import { Close } from '../SVG';

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const openCloseCart = () => {
    console.log('clicked');
    dispatch(switchCart());
  };

  if (!cart) return null;
  return (
    <>
      <div
        role="button"
        onKeyDown={openCloseCart}
        onClick={() => dispatch(switchCart())}
        className={style.background}
        tabIndex={0}
        aria-label="Modal fade"
      />
      <div className={style.content}>
        <div className="d-flex w-100 justify-content-between">
          <h2 className="text-uppercase">Cart</h2>
          <Button className={style.close} onClick={openCloseCart}>
            <Close />
          </Button>
        </div>
      </div>

    </>
  );
};

export default Cart;
