import React from 'react';
import { Link } from 'react-router-dom';

const Item = () => (
  <div className="cart-item">
    <div className="row align-items-center">
      <div className="col-12 col-lg-6">
        <div className="media media-product">
          <Link to="/products">
            <img src="" alt="" />
          </Link>
          <div className="media-body">
            <h5 className="media-title">Analog Magazine Rack</h5>
            <span className="small">Red</span>
          </div>
          <div className="col-4 col-lg-2 text-center">
            <span className="cart-item-price">$120</span>
          </div>
          <div className="col-4 col-lg-2 text-center">
            <div className="counter">
              <span className="counter-minus icon-minus" field="qty-1" />
              <input type="text" name="qty-1" className="counter-value" value="2" min="1" max="10" />
              <span className="counter-plus icon-plus" field="qty-1" />
            </div>

            <div className="col-4 col-lg-2 text-center">
              <span className="cart-item-price">$240</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default Item;
