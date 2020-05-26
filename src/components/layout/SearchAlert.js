import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

import { Alert } from 'antd';

const SearchAlert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert && (
      <Alert message={alert.message} type={alert.alertType} />
    )
  )
}

export default SearchAlert
