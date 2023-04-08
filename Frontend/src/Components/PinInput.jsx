import React from 'react'

const PinInput = ({ maxInput, handleBackward, handleForward, length, valueCheck}) => {

  const handleButtons = (e) => {
    if (e.keyCode === 8) {
      handleBackward(e);
    } else {
      handleForward(e);
    }
  }
  console.log()
  const styleData = (length === valueCheck.length && valueCheck[valueCheck.length-1].length === maxInput) ? { border: '2px solid green'} : {}
  return (
    <input
      style={styleData}
      type="text"
      maxLength={maxInput}
      onKeyUp={(e) => handleButtons(e)}
    />
  )
}

export default PinInput