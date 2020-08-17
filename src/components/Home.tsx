import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <h1>Fish Tree Bird Quiz</h1>
      <Link to='/game'>
        <button>Start</button>
      </Link>
    </div>

  )
}

export default Home