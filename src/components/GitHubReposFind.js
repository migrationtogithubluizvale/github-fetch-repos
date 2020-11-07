import React from 'react'
import renderIf from 'render-if'
import SearchBar from './SearchBar'
import Welcome from './Welcome'
import RepositoryList from './RepositoryList'

const GitHubReposFind = ({logout, user, onSearchSubmit, data, error}) => {

  const canShowRepositoryList = renderIf(!error && data)

  return (
  <React.Fragment>
    <SearchBar onSubmit={term => onSearchSubmit(term)} />
    <Welcome
            logout={logout}
            email={user.email}
        />
        {canShowRepositoryList(<RepositoryList data={data} />)}
  </React.Fragment>
  )
}


export default GitHubReposFind