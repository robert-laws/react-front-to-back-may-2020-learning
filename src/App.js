import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout } from 'antd';
import './App.less';
import './App.scss';
import Navbar from './components/layout/Navbar';
import MyFooter from './components/layout/MyFooter';
import Users from './components/users/Users';

const { Header, Content, Footer } = Layout;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
      setUsers(result.data);
      setLoading(false);
    };
 
    fetchData();
  }, [])

  return (
    <Layout className="layout">
      <Header>
        <h3 className='logo-title'>App One</h3>
        <Navbar themeColor={'dark'} />
      </Header>
      <Content className='layout-content' style={{ padding: '10px 50px' }}>
        <h1>My App</h1>
        <Users users={users} loading={loading} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <MyFooter author='Hal Hope' year='2020' />
      </Footer>
    </Layout>
  );
}

export default App;
