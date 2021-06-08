import React from 'react';
import './formInput.scss';
import PropTypes from 'prop-types';

const FormInput = ({
  groupClass, inputClass, handleChange, labelClass, label, ...otherProps
}) => (
  <div className={groupClass}>

    {
      label
        ? (
          <label htmlFor={label} className={labelClass || null}>
            { label}
          </label>
        )
        : null
    }
    { /* eslint-disable-next-line  */}
    <input id={label} className={inputClass} onChange={handleChange} {...otherProps} />
  </div>
);

FormInput.defaultProps = {
  label: null,
  labelClass: null,
};
FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  groupClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  label: PropTypes.string,
};

export default FormInput;
