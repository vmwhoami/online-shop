import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProdImages = ({ photo }) => {
  const [index, changeIndex] = useState(0);
  // const handleHover = () => {
  //   changeIndex(1);
  // };
  console.log(photo);
  return (
    <figure
      className="product-image"
    // onMouseEnter={handleHover}
    >

      {/* <img src={photo[index].url} alt={photo[index].url} /> */}
    </figure>
  );
};

ProdImages.propTypes = {
  photo: PropTypes.instanceOf(Array).isRequired,
};
export default ProdImages;
