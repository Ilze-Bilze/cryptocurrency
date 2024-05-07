import React from 'react'

const Select = React.forwardRef(function Input(ref, text) {
  // const text = props

  return (
    <select name="from_currency" ref={ref}>
      <option>Select a Currency{text}</option>
    </select>
  )
})

export default Select