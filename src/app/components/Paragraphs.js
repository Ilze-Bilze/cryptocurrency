"use client"; // This is a client component 
import PropTypes from 'prop-types'

function Paragraphs(props) {
  const { text } = props

  return (
    <p className="my-1.5">{text}</p>
  )
}

Paragraphs.propTypes = {
  text: PropTypes.string.isRequired
}

export default Paragraphs