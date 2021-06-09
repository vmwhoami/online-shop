import React from 'react';
import './RegAuth.scss';
import { GrFormClose } from 'react-icons/all';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Row, Button } from 'react-bootstrap';
import { switchLogin } from '../../redux/ui/uiActions';
import FormInput from '../formInput/form-input';

const RegAuth = () => {
  const loginInput = useSelector((state) => state.uiReducer.loginInput);
  const dispatch = useDispatch();
  if (!loginInput) return null;
  return (
    <AnimatePresence>
      {loginInput && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: 1 }}
            exit={{ opacity: 0 }}
            role="button"
            onClick={() => dispatch(switchLogin())}
            tabIndex={0}
            aria-label="Modal fade"
            className="regauthbackground"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: 1 }}
            exit={{ opacity: 1 }}
            className="regauthent"
          >
            <Row className="d-flex mx-0 p-2 align-items-center w-100 justify-content-between">
              <h5 className="text-uppercase">Login</h5>
              <Button className="close" onClick={() => dispatch(switchLogin())}>
                <GrFormClose />
              </Button>
            </Row>
            <form>
              <FormInput label="Email" type="email" />
              <FormInput label="Password" type="password" />
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default RegAuth;
