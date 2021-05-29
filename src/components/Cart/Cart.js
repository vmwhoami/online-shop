import React from 'react';
import { GrFormClose } from 'react-icons/all';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import style from './cart.module.css';
import switchCart from '../../redux/cart/cartActions';
import CartButtons from './CartButtons';
import CartItems from './items';

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const openCloseCart = () => {
    dispatch(switchCart());
  };

  if (!cart) return null;
  return (
    <AnimatePresence>
      {cart && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: 1 }}
            exit={{ opacity: 0 }}
            role="button"
            onKeyDown={openCloseCart}
            onClick={() => dispatch(switchCart())}
            className={style.background}
            tabIndex={0}
            aria-label="Modal fade"
          />
          <motion.div
            initial={{ opacity: 0, y: -1000 }}
            animate={{
              opacity: 1,
              y: 0,
              type: 'Tween',
            }}
            transition={{
              x: { type: 'spring', stiffness: 100 },
              default: { duration: 0.3 },
            }}
            exit={{ opacity: 0 }}
            className={style.content}
          >
            <div className="d-flex w-100 justify-content-between">
              <h2 className="text-uppercase">Cart</h2>
              <Button className={style.close} onClick={openCloseCart}>
                <GrFormClose />
              </Button>
            </div>

            <CartItems />
            <CartButtons />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
