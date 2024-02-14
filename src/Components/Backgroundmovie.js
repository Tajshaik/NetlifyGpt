import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const Backgroundmovie = ({movieId}) => {
 useMovieTrailer(movieId)
const trailerKey = useSelector((store) => store.Movies?.video)
  return (
    <div className='background-movie'>
        <iframe 
         src={"https://www.youtube.com/embed/"+ trailerKey?.key+ "?&autoplay=1"}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share"
         allowFullScreen></iframe>
    </div>
  )
}

export default Backgroundmovie