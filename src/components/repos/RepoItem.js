import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'


const RepoItem = ({ repo }) => {
  return (
    <div>
      <h3>
        <Button type='link' href={repo.html_url}>{repo.name}</Button>
      </h3>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
