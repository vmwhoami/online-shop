import React from 'react';
import { useDispatch } from 'react-redux';
import './RegAuth.scss';
import { GrFormClose } from 'react-icons/all';
import { motion } from 'framer-motion';
import { Row, Button, Form } from 'react-bootstrap';
import { switchLogin } from '../../redux/ui/uiActions';
import useForm from '../useForm/useForm';
import FormInput from '../formInput/form-input';
import Validate from '../useForm/validateInfo';
import firebase from '../../firebase/firebase.utils';

const RegAuth = () => {
  const { handleChange, values } = useForm(Validate);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.auth();
  };
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
        className="regauthent row"
      >
        <Row className="d-flex mx-0 p-4 align-items-center w-100 justify-content-between">
          <h5 className="text-uppercase">Login</h5>
          <Button className="close" onClick={() => dispatch(switchLogin())}>
            <GrFormClose />
          </Button>
        </Row>

        <Form onSubmit={handleSubmit} className="col-12">
          <Form.Group className="mb-3 d-flex flex-column col-12">
            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="email"
              label="email"
              type="email"
              handleChange={handleChange}
              value={values.email}
            />

            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              handleChange={handleChange}
              value={values.password}
            />

            <Form.Group className="d-flex flex-column px-0 pt-5">
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
