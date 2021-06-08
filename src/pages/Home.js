import React from 'react';
import Layout from '../layout';
import FormInput from '../components/formInput/form-input';

const Home = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Layout>
      <FormInput handleChange={handleChange} />
    </Layout>
  );
};

// Home.propTypes = {

// };

export default Home;
