import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './breadcrumbs.scss';

const BreadCrubs = ({ first, second }) => (
  <section className="breadcrumbs separator-bottom">
    <div className="container">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active"><Link to={first}>{first}</Link></li>
              {second ? <li className="breadcrumb-item active"><Link to={second}>{second}</Link></li> : null}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

BreadCrubs.defaultProps = {
  second: null,
};

BreadCrubs.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string,
};
export default BreadCrubs;
