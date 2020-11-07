import React from 'react'

const RepositoryList = ({ data }) => (
    <div>
        <Choose>
            <When condition={data && data.message}>
                <p>{data.message}</p>
            </When>
            <Otherwise>
                <ul>
                    {data && data.map(repos => (
                        <li>
                            {repos.name}
                        </li>))}
                </ul>
            </Otherwise>
        </Choose>
    </div>
)


export default RepositoryList