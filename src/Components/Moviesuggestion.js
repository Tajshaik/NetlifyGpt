import React from 'react'

const Moviesuggestion = ({title, MoviesArray}) => {
  return (
    <>
    <div className='suggestions-title'>{title}</div>
        <div className='Movie-suggestions'>
          {
            MoviesArray?.map((item)=>(
              <img className='poster-img' key={item.id} alt='trending movies' src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} />
            ))
          }
        </div>
    </>
  )
}

export default Moviesuggestion