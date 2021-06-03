import React from 'react'

const PlusMinusButtons = () => {
  return (
    <div className="counter">
      <span className="counterMinus iconMinus" />
      <input type="text" name="qty-1" className="counterValue" value="2" min="1" max="10" />
      <span className="counterPlus iconPlus" />
    </div>
  )
}

export default PlusMinusButtons
