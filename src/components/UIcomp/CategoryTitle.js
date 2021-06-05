import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CategoryTitle = ({ category, quantity }) => (
  <Row className="justify-content-end">
    <Col lg={9}>
      <Row className="gutter-2 align-items-end">
        <Col md={6}>
          <h1 className="mb-0">{category}</h1>
          <span className="eyebrow">
            {quantity}
            {' '}
            products
          </span>
        </Col>
        <Col className="col-md-6 text-md-right">
          <div className="dropdown">
            <a
              className="btn btn-outline-secondary
              btn-sm dropdown-toggle"
              href="#!"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              What
              {'&apos;'}
              s New
            </a>

            <div
              className="dropdown-menu"
            >

              <a className="dropdown-item" href="#!">Price high to low</a>
              <a className="dropdown-item" href="#!">Price low to high</a>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);
CategoryTitle.propTypes = {
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CategoryTitle;
