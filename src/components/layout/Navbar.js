import React, { useState } from 'react'
import { Menu } from 'antd';

const Navbar = () => {
  const [currentKey, setCurrentKey] = useState({ current: 'home' })

  const handleClick = event => {
    setCurrentKey({ current: event.key })
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[currentKey.current]} mode='horizontal' theme='dark'>
      <Menu.Item key='home'>Home</Menu.Item>
      <Menu.Item key='about'>About Us</Menu.Item>
    </Menu>
  )
}

export default Navbar
