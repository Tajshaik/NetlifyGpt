import React from 'react'
import { useSelector } from 'react-redux'
import Moviesuggestion from './Moviesuggestion'

const Suggestionscontainer = () => {
  const Allmovies = useSelector(store => store.Movies)
  const trendingMovies = Allmovies?.nowPlayingMovies
  const popularMovies = Allmovies?.popularMovies
  const topratedMovies = Allmovies?.topratedMovies
  const upcomingMovies = Allmovies?.upcomingMovies
  const titleArray = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming']
  return (
    <div className='suggestions-container'>
        <Moviesuggestion title='Now Playing' MoviesArray={trendingMovies}/>
        <Moviesuggestion title='Popular' MoviesArray={popularMovies}/>
        <Moviesuggestion title='Top Rated' MoviesArray={topratedMovies}/>
        <Moviesuggestion title='Upcoming' MoviesArray={upcomingMovies} />
   </div>
  )
}

export default Suggestionscontainer