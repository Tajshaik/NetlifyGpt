import React from 'react'
import Movietitle from './Movietitle'
import Backgroundmovie from './Backgroundmovie'
import { useSelector } from 'react-redux'

const Moviecontainer = () => {
    const movie= useSelector( store => store.Movies?.nowPlayingMovies)
    if(!movie) return;

    const mainMovie = movie[0]
    console.log(movie)
  return (
    <div>
        <Backgroundmovie movieId={mainMovie?.id}/>
        <Movietitle movie={mainMovie}/>
    </div>
  )
}

export default Moviecontainer