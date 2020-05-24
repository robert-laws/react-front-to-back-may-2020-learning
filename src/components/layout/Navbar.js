import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Menu } from 'antd';

const Navbar = ({ themeColor }) => {
  const [currentKey, setCurrentKey] = useState({ current: 'home' })

  const handleClick = event => {
    setCurrentKey({ current: event.key })
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[currentKey.current]} mode='horizontal' theme={themeColor}>
      <Menu.Item key='home'>Home</Menu.Item>
      <Menu.Item key='about'>About Us</Menu.Item>
    </Menu>
  )
}

Navbar.defaultProps = {
  themeColor: 'light'
}

Navbar.propTypes = {
  themeColor: PropTypes.string.isRequired
}

export default Navbar
