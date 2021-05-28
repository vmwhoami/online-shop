import React from 'react';
import style from './cart.module.css';
import Item from '../Item/item';

const CartItems = () => (
  <div className={style.cartitems}>
    <Item />
  </div>

);

export default CartItems;
