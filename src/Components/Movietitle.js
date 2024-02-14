import React from 'react'

const Movietitle = ({movie}) => {
  
    console.log(movie?.original_title)
  return (
    <div className='Movie-title'>
        <h1>{movie?.original_title}</h1>
        <p>{movie?.overview}</p>
        <div className='title-btn-container'>
            <button className='title-btn'>▶ Play</button>
            <button className='title-btn'>ℹ️  More info</button>
        </div>
    </div>
  )
}

export default Movietitle