import React from 'react'
import SearchBar from './SearchBar'
import Welcome from './Welcome'

const GitHubReposFind = ({logout, user, onSearchSubmit, res}) => (
  <React.Fragment>
    <SearchBar onSubmit={term => onSearchSubmit(term)} />
    <Welcome
            logout={logout}
            email={user.email}
        />
  </React.Fragment>
)


export default GitHubReposFind