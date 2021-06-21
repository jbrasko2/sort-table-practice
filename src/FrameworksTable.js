import React, { useState } from 'react'

const FrameworksTable = (props) => {
  const repoData = props.data
  const [sortField, setSortField] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)
  let sortedData = [...repoData]

  if (sortField !== null) {
    sortedData.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection === 'asc' ? 1 : -1
      } else {
        return sortDirection === 'asc' ? -1 : 1
      }
    })
  }

  const handleSort = (field) => {
    if (sortDirection === 'asc') {
      setSortDirection('desc')
    } else {
      setSortDirection('asc')
    }
    setSortField(field)
  }

  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const getClassName = (name) => {
    if (name === sortField) {
      return sortDirection
    }
  }

  return (
    <table>
      <caption>LPL OpEx - JavaScript Frameworks</caption>
      <thead>
        <tr>
          <th>
            <button
              onClick={() => handleSort('name')}
              className={getClassName('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              onClick={() => handleSort('stargazers_count')}
              className={getClassName('stargazers_count')}
            >
              Stars
            </button>
          </th>
          <th>
            <button
              onClick={() => handleSort('forks')}
              className={getClassName('forks')}
            >
              Forks
            </button>
          </th>
          <th>
            <button
              onClick={() => handleSort('subscribers_count')}
              className={getClassName('subscribers_count')}
            >
              Watchers
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((repo) => (
          <tr key={repo.name}>
            <td>{capitalize(repo.name)}</td>
            <td>{repo.stargazers_count}</td>
            <td>{repo.forks}</td>
            <td>{repo.subscribers_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default FrameworksTable
