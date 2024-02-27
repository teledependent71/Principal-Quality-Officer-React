import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Quality Officer</title>
        <meta property="og:title" content="Principal Quality Officer" />
      </Helmet>
    </div>
  )
}

export default Home
