import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PlusMinusButtons from './PlusMinusButtons'
// import style from './item.module.css';
// import PropTypes from 'prop-types';

const Item = () => (
  <div className="cartItem">
    <Row className="align-items-center">
      <Col className="col-12 col-lg-6">
        <div className="media mediaProduct">
          <Link to="/products">
            <img src="" alt="" />
          </Link>
          <div className="mediaBody">
            <h5 className="mediaTitle">Analog Magazine Rack</h5>
            <span className="small">Red</span>
          </div>
          <Col className="col-4 col-lg-2 text-center">
            <span className="cartItemPrice">$120</span>
          </Col>
          <Col className="col-4 col-lg-2 text-center">

            <PlusMinusButtons />

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
