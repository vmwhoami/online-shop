import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import Layout from '../layout';
// import firebase from '../firebase/firebaseConfig';
import getProducts from '../redux/products/productsActions';

const Home = () => {
  const dispatch = useDispatch();

  const getSmth = () => {
    dispatch(getProducts());
  };
  return (
    <Layout>
      <button type="button" onClick={() => getSmth()}>get smth</button>
    </Layout>
  );
};

// Home.propTypes = {

// };

export default Home;
