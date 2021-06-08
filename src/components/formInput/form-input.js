import React from 'react'

const FormInput = ({ handleChange, classnume, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {
        label ?
          (<label className={classnume ? classnume : null}>
            {label}
          </label>)
          : null
      }
    </div>
  )
}

export default FormInput
