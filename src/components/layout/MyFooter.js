import React from 'react'
import PropTypes from 'prop-types';

const MyFooter = ({ author, year }) => {
  return (
    <div className='my-footer'>
      {`written by ${author}. © ${year}`}
    </div>
  )
}

MyFooter.propTypes = {
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

MyFooter.defaultProps = {
  author: 'Bob Cobb',
  year: '2019'
}

export default MyFooter
