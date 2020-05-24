import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({user: { login, avatar_url, html_url}}) => {

  return (
    <div style={{ border: '1px solid #CCC', margin: '10px', padding: '10px', textAlign: 'center' }}>
      <img src={avatar_url} alt='user' style={{ width: '60px', borderRadius: '50px' }} />
      <h3>{login}</h3>
      <div>
        <a href={html_url}>
          More...
        </a>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
