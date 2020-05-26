import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState';

import { Layout } from 'antd';
import './App.less';
import './App.scss';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import MyFooter from './components/layout/MyFooter';
import User from './components/users/User';
import SearchAlert from './components/layout/SearchAlert';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Layout className="layout">
            <Header>
              <h3 className='logo-title'>App One</h3>
              <Navbar themeColor={'dark'} />
            </Header>
            <Content className='layout-content' style={{ padding: '10px 50px' }}>
              <h1>My App</h1>
              <SearchAlert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:username' component={User} />
              </Switch>          
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <MyFooter author='Hal Hope' year='2020' />
            </Footer>
          </Layout>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
