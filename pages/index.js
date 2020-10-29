import useSWR from 'swr'
import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '../utils/auth/useUser'
import { fetcher } from './api/apiCall'
import SearchBar from '../components/SearchBar'
import 'semantic-ui-css/semantic.min.css'

const Index = () => {
  const { user, logout } = useUser()
  const [term, setTerm] = useState('default')
  const [index, setIndex] = useState(1)

  const { data, error } = useSWR(`https://api.github.com/users/${term}/repos?page=${index}`, fetcher)

  const onSearchSubmit = (term) => {
    setIndex(1)
    if(term.length > 0) setTerm(term.trim())
  }

  if (!user) {
    return (
      <>
        <p>
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    )
  }

  return (
    <div>
      <SearchBar onSubmit={term => onSearchSubmit(term)} />
      <div>
        <p>You're signed in. Email: {user.email}</p>
        <p
          style={{
            display: 'inline-block',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
      {error && <div>Failed to fetch repos !</div>}
      {data && !error ? (
        <div style={{ textAlign: "center" }}>{!error && user && data && data.map(item => <div key={item.id}>{item.name}</div>)}</div>
      ) : (
          <div>Loading...</div>
        )}
      {data && data.length >= 30 ? (
        <>
          <button onClick={() => setIndex(index - 1)}>Previous</button>
          <button onClick={() => setIndex(index + 1)}>Next</button>
        </>
      ) : null}
    </div>
  )
}

export default Index
