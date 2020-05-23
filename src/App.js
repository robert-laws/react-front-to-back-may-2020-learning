import React from 'react';
import { Layout, Button, message } from 'antd';
import './App.less';
import './App.scss';
import Navbar from './components/layout/Navbar';
import MyFooter from './components/layout/MyFooter';

const { Header, Content, Footer } = Layout;

function App() {
  const handleClick = () => {
    message.info('Welcome to the App');
  }

  return (
    <Layout className="layout">
      <Header>
        <h3 className='logo-title'>App One</h3>
        <Navbar />
      </Header>
      <Content className='layout-content' style={{ padding: '0 50px' }}>
        <h1>App</h1>
        <Button onClick={handleClick} type='primary' danger>Click Here!</Button>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <MyFooter author='Hal Hope' year='2020' />
      </Footer>
    </Layout>
  );
}

export default App;
