import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'antd';

const { Search } = Input;

const SearchForm = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleSubmit = event => {
    doSearch();    
  }

  const handleEnter = event => {
    event.preventDefault();
    doSearch();
  }

  function doSearch() {
    if(text === '') {
      setAlert('Please enter a search', 'error')
    } else {
      searchUsers(text);
      setText('')
    }
  }

  const handleClearUsers = () => {
    clearUsers();
    setText('');
  }

  return (
    <div>
      <form>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          value={text}
          onChange={handleChange}
          onSearch={handleSubmit}
          onPressEnter={handleEnter}
        />
      </form>
      {
        showClear && (
          <Button block style={{ marginTop: '10px' }} onClick={handleClearUsers}>Clear Search</Button>
        )
      }
    </div>
  )
}

SearchForm.propTypes = {
  searchUsers: PropTypes.func.isRequired, 
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}

export default SearchForm
