import React from 'react'

import { Alert } from 'antd';

const SearchAlert = ({ alert }) => {
  return (
    alert && (
      <Alert message={alert.message} type={alert.alertType} />
    )
  )
}

export default SearchAlert
