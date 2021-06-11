import React, { useState } from 'react';
import './RegAuth.scss';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/all';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Row, Button, Form } from 'react-bootstrap';
import { switchLogin } from '../../redux/ui/uiActions';
import FormInput from '../formInput/form-input';
import { signIn } from '../../redux/user/uesrActions';

const RegAuth = ({ register }) => {
  const loginInput = useSelector((state) => state.uiReducer.loginInput);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'password2') {
      setPassword2(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };
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
            initial={{ opacity: 0, x: '-50%' }}
            animate={{
              opacity: 1, y: '-50%', x: '-50%', transition: 1,
            }}
            exit={{ opacity: 1 }}
            className="regauthent"
          >
            <Row className="d-flex mx-0 p-4 align-items-center w-100 justify-content-between">
              <h5 className="text-uppercase">Login</h5>
              <Button className="close" onClick={() => dispatch(switchLogin())}>
                <GrFormClose />
              </Button>
            </Row>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 d-flex flex-column">
                <FormInput
                  groupClass="d-flex flex-column px-4"
                  inputClass="p-3 border border-success"
                  label="Email adress"
                  type="email"
                  labelClass="text-uppercase font-weight-light"
                  name="email"
                  value={email}
                  handleChange={changeHandler}
                />
                <FormInput
                  groupClass="d-flex flex-column px-4 pt-3"
                  inputClass="p-3  border border-success"
                  labelClass="text-uppercase font-weight-light"
                  name="password"
                  label="Password"
                  type="password"
                  handleChange={changeHandler}
                  value={password}
                />

                {register ? (
                  <FormInput
                    groupClass="d-flex flex-column px-4 pt-3"
                    inputClass="p-3  border border-success"
                    labelClass="text-uppercase font-weight-light"
                    name="password2"
                    label="Repeat password"
                    type="password"
                    handleChange={changeHandler}
                    value={password2}
                  />
                ) : null}
                <Form.Group className="d-flex flex-column px-4 pt-5">
                  <Button
                    className="btn-flat py-3  text-center rounded-0 border-0"
                    type="submit"
                  >
                    Sign In
                  </Button>
                </Form.Group>
              </Form.Group>
            </Form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

RegAuth.defaultProps = {
  register: false,
};
RegAuth.propTypes = {
  register: PropTypes.bool,
};
export default RegAuth;
