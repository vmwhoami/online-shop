import React from 'react'
import Layout from '../layout'
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../firebase/firebaseConfig'
import getProducts from '../redux/products/productsActions'
import PropTypes from 'prop-types'

const Home = props => {
  const dispatch = useDispatch();

  const getSmth = () => {
    dispatch(getProducts())

  }
  return (
    <Layout>
      <button type="button" onClick={() => getSmth()}>get smth</button>
    </Layout>
  )
}

Home.propTypes = {

}

export default Home
