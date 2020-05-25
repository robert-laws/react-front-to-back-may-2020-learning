import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'antd';
import './App.less';
import './App.scss';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import MyFooter from './components/layout/MyFooter';
import User from './components/users/User';
import Users from './components/users/Users';
import Search from './components/users/SearchForm';
import SearchAlert from './components/layout/SearchAlert';

const { Header, Content, Footer } = Layout;

function App() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([])
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] =  useState(null)

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchData = async () => {
  //     const result = await axios(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
  //     setUsers(result.data);
  //     setLoading(false);
  //   };
 
  //   fetchData();
  // }, [])

  // search Github users
  const handleSearch = async text => {
    setLoading(true);
    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
    setUsers(result.data.items);
    setLoading(false);
  }

  // get single Github user
  const getUser = async username => {
    setLoading(true)
    const result = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(result.data);
    setLoading(false)
  }

  // get user's repos
  const getUserRepos = async username => {
    setLoading(true)
    const result = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(result.data);
    setLoading(false)
  }

  const handleClear = () => {
    setUsers([]);
    setLoading(false);
  }

  const handleAlert = (message, alertType) => {
    setAlert({
      message,
      alertType
    })

    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <h3 className='logo-title'>App One</h3>
          <Navbar themeColor={'dark'} />
        </Header>
        <Content className='layout-content' style={{ padding: '10px 50px' }}>
          <h1>My App</h1>
          <SearchAlert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={handleSearch} clearUsers={handleClear} showClear={ users.length > 0 ? true : false } setAlert={handleAlert} />
                <Users users={users} loading={loading} />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:username' render={props => (
              <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />
            )} />
          </Switch>          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <MyFooter author='Hal Hope' year='2020' />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
