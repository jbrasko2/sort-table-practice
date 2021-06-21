import React, { useState, useEffect } from 'react'
import FrameworksTable from './FrameworksTable.js'
import './styles.css'

export default function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    const reactApiCall = fetch('https://api.github.com/repos/facebook/react')
    const angularApiCall = fetch(
      'https://api.github.com/repos/angular/angular.js'
    )
    const emberApiCall = fetch('https://api.github.com/repos/emberjs/ember.js')

    Promise.all([reactApiCall, angularApiCall, emberApiCall])
      .then((values) => Promise.all(values.map((value) => value.json())))
      .then((res) => setState(res))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <FrameworksTable data={state} />
    </div>
  )
}
