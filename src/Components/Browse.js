import React, { useEffect } from 'react'
import useNowplayingmovies from '../hooks/useNowplayingmovies'
import Moviecontainer from './Moviecontainer'
import Suggestionscontainer from './Suggestionscontainer'
import usePolpularmovies,{useTopratedMovies,useUpcomingMovies} from '../hooks/usePopularmovies'

const Browse = () => {
  useNowplayingmovies()
  usePolpularmovies()
  useTopratedMovies()
  useUpcomingMovies()
  return (
    <div>
      <Moviecontainer />
      <Suggestionscontainer />
    </div>
  )
}

export default Browse