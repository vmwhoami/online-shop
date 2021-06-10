import React from 'react';
import images from './images';
import './homeSlider.scss';

const HomeSlider = () => (
  <>

    <div className="swipe-container" />
    <div className="image-container">
      <div
        className="image image-overlay image-zoom"
        style={{ backgroundImage: `url(${images[0].img})` }}
      />
    </div>
  </>

);

export default HomeSlider;
