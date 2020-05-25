import React, { Fragment, useEffect } from 'react'
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Button, Badge } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'


const User = ({ getUser, getUserRepos, user, repos, loading, match }) => {

  useEffect(() => {
    getUser(match.params.username)
    getUserRepos(match.params.username)
  }, [])

  const { name, avatar_url, company, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hirable } = user;

  if(loading) return <Spinner />

  return (
    <Fragment>
      <Button type="primary">
        <Link to='/'>Return Home</Link>
      </Button>
      <hr/>
      Hireable: {' '}
      {hirable ? <CheckOutlined /> : <CloseOutlined />}
      <div style={{ textAlign: 'center', width: '300px' }}>
        <img src={avatar_url} alt='user' style={{ width: '60px', borderRadius: '50px' }} />
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
      <div>
        {bio && (
          <Fragment>
            <h4>Bio</h4>  
            <p>{bio}</p>
          </Fragment>
        )}
        <Button type="link" href={html_url}>Visit Github Profile</Button>
        <ul>
          <li>{login && <Fragment><strong>Username: </strong> {login}</Fragment>}</li>  
          <li>{company && <Fragment><strong>Company: </strong> {company}</Fragment>}</li>  
          <li>{blog && <Fragment><strong>Blog: </strong> <Button type="link" href={blog}>{blog}</Button></Fragment>}</li>  
        </ul>
      </div>
      <div style={{ textAlign: 'center', width: '300px' }}>
        Followers: <Badge count={followers} /><br/>
        Following: <Badge count={following} style={{ backgroundColor: '#52c41a' }} /><br/>
    Public Repos: <Badge count={public_repos} style={{ backgroundColor: '#C2c41a' }} overflowCount={999} /><br/>
        Public Gists: <Badge count={public_gists} style={{ backgroundColor: '#A6881a' }} />
      </div>
      <div>
        <Repos repos={repos} />
      </div>
    </Fragment>
  )
}

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
}

export default User
