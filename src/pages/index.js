import onlyIf from 'react-only-if'
import React, { useState }  from 'react'
import 'semantic-ui-css/semantic.min.css'
import GitHubReposFind from '../components/GitHubReposFind'
import SignInSignOut from '../components/SignInSignOut'
import { useUser } from '../utils/auth/useUser'
import { Requests } from './api/requests'

const Index = () => {
  const { user, logout } = useUser()
  const [term, setTerm] = useState('default')

  const { data, error } = Requests.getRepos(term)
  const onSearchSubmit = term => setTerm(term)
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
