import React from 'react'
import Movietitle from './Movietitle'
import Backgroundmovie from './Backgroundmovie'
import { useSelector } from 'react-redux'

const Moviecontainer = () => {
    const movie= useSelector( store => store.Movies?.nowPlayingMovies)
    if(!movie) return;

    const mainMovie = movie[6]
    console.log(movie)
  return (
    <div>
        <Movietitle movie={mainMovie}/>
        <Backgroundmovie movieId={mainMovie?.id}/>
    </div>
  )
}

export default Moviecontainer