import React,{useEffect} from 'react'
import { options } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { AddNowplayingMovies } from '../Utils/movieSlice';

const useNowplayingmovies = () => {
    const dispatch = useDispatch()
    const getMoviedata = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
     const JsonData = await data.json() 
     dispatch(AddNowplayingMovies(JsonData.results))
    }
     useEffect(()=>{
       getMoviedata()
     },[])
}

export default useNowplayingmovies