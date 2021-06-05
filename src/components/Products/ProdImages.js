import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProdImages = ({ photo }) => {
  const [index, changeIndex] = useState(0);
  const handleEnter = () => changeIndex(1);
  const hanleLeave = () => changeIndex(0);
  const foto = photo[index];
  return (
    <figure
      className="product-image"
      onMouseEnter={handleEnter}
      onMouseLeave={hanleLeave}
    >
      <img src={foto ? foto.url : null} alt="product" />
    </figure>
  );
};

ProdImages.propTypes = {
  photo: PropTypes.instanceOf(Array).isRequired,
};
export default ProdImages;
