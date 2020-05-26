import React, { Fragment } from 'react'
import SearchForm from '../users/SearchForm';
import Users from '../users/Users';

const Home = () => (
  <Fragment>
    <SearchForm />
    <Users />
  </Fragment>
)

export default Home
