import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  handleChange, classnume, label, ...otherProps
}) => (
  <div className="group">

    {
      label
        ? (
          <label htmlFor={label} className={classnume || null}>
            { label}
          </label>
        )
        : null
    }
    { /* eslint-disable-next-line  */}
    <input id={label} className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

FormInput.defaultProps = {
  label: null,
  classnume: null,
};
FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  classnume: PropTypes.string,
  label: PropTypes.string,
};

export default FormInput;
