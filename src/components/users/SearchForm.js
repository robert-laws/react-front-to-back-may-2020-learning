import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

const SearchForm = () => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default SearchForm
