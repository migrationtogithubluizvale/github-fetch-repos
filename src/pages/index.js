import useSWR from 'swr'
import onlyIf from 'react-only-if';
import React, { useState }  from 'react';
import { useUser } from '../utils/auth/useUser'
import { fetcher } from './api/apiCall'
import GitHubReposFind from '../components/GitHubReposFind'
import SignInSignOut from '../components/SignInSignOut'
import 'semantic-ui-css/semantic.min.css'

const Index = () => {
  const { user, logout } = useUser()
  const [term, setTerm] = useState('default')

  const { data, error } = useSWR(`https://api.github.com/users/${term}/repos`, fetcher)

  const onSearchSubmit = (term) => {
    if (term.length > 0) setTerm(term)
  }

  const ShowPageOnlyIf = onlyIf( ({ user }) => user, SignInSignOut)(GitHubReposFind)

  return (
    <React.Fragment>
      <ShowPageOnlyIf
        user={user}
        data={data}
        error={error}
        onSearchSubmit={onSearchSubmit}
        logout={logout}
      />
    </React.Fragment>
  )

  
}

export default Index
