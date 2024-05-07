import React from 'react'

const Input = React.forwardRef(function Input(props, ref) {
  return (
    <>
      <input type="number" name="from_amount" ref={ref} />
    </>
  )
})

export default Input