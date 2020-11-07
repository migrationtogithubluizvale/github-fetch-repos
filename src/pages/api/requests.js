import useSWR from 'swr'
import { fetcher } from './apiCall'

export const Requests = {
    getRepos: name => useSWR(`https://api.github.com/users/${name}/repos`, fetcher),
    giveStar: (name, repo) => useSWR( `https://api.github.com//user/starred/${name}/${repo}`, fetcher)
}