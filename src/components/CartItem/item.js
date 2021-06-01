import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
// import PropTypes from 'prop-types';

const Item = () => (
  <div className="cart-item">
    <Row className="align-items-center">
      <Col className="col-12 col-lg-6">
        <div className="media media-product">
          <Link to="/products">
            <img src="" alt="" />
          </Link>
          <div className="media-body">
            <h5 className="media-title">Analog Magazine Rack</h5>
            <span className="small">Red</span>
          </div>
          <Col className="col-4 col-lg-2 text-center">
            <span className="cart-item-price">$120</span>
          </Col>
          <Col className="col-4 col-lg-2 text-center">
            <div className="counter">
              <span className="counter-minus icon-minus" />
              <input type="text" name="qty-1" className="counter-value" value="2" min="1" max="10" />
              <span className="counter-plus icon-plus" />
            </div>
            <Col className="col-4 col-lg-2 text-center">
              <span className="cart-item-price">$240</span>
            </Col>
          </Col>

        </div>
      </Col>
    </Row>
  </div>
);

// Item.propTypes = {

// };

export default Item;
