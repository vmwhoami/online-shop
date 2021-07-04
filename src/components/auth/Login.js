import React from 'react';
import { useDispatch } from 'react-redux';
import './RegAuth.scss';
import { GrFormClose } from 'react-icons/all';
import { motion } from 'framer-motion';
import { Row, Button, Form } from 'react-bootstrap';
import { switchLogin } from '../../redux/ui/uiActions';
import useForm from '../useForm/useForm';
import FormInput from '../formInput/form-input';

const RegAuth = () => {
  const { handleChange, values } = useForm();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reached this part');
  };
  const randKey = () => Math.random().toString(36).slice(2, 9);
  return (
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
              key={randKey()}
              groupClass="d-flex flex-column px-4 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="email"
              label="email"
              type="email"
              handleChange={handleChange}
              value={values.email}
            />

            <FormInput
              key={randKey()}
              groupClass="d-flex flex-column px-4 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="password"
              label="Password"
              type="password"
              handleChange={handleChange}
              value={values.password}
            />
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
  );
};

export default RegAuth;
