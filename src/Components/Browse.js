import React, { useEffect } from 'react'
import useNowplayingmovies from '../hooks/useNowplayingmovies'
import Moviecontainer from './Moviecontainer'
import Suggestionscontainer from './Suggestionscontainer'

const Browse = () => {
  useNowplayingmovies()

  return (
    <div>
      <Moviecontainer />
      <Suggestionscontainer />
    </div>
  )
}

export default Browse