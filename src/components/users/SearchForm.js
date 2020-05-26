import React, { useState, useContext } from 'react'
import { Input, Button } from 'antd';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const { Search } = Input;

const SearchForm = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

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
      alertContext.setAlert('Please enter a search', 'error')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
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
        githubContext.users.length > 0 && (
          <Button block style={{ marginTop: '10px' }} onClick={githubContext.clearUsers}>Clear Search</Button>
        )
      }
    </div>
  )
}

export default SearchForm
