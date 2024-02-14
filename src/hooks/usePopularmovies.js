import React,{useEffect} from 'react'
import { options } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { AddpopularMovies, AddtopratedMovies, AddupcomingMovies } from '../Utils/movieSlice';

const usePolpularmovies = () => {
    const dispatch = useDispatch()
    const getMoviedata = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
     const JsonData = await data.json() 
     dispatch(AddpopularMovies(JsonData.results))
    }
     useEffect(()=>{
       getMoviedata()
     },[])
}

export default usePolpularmovies

export const useTopratedMovies = () => {
    const dispatch = useDispatch()
    const getMoviedata = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
     const JsonData = await data.json() 
     console.log('Top rated', JsonData.results)
     dispatch(AddtopratedMovies(JsonData.results))
    }
     useEffect(()=>{
       getMoviedata()
     },[])
}

export const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getMoviedata = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
     const JsonData = await data.json() 
     dispatch(AddupcomingMovies(JsonData.results))
    }
     useEffect(()=>{
       getMoviedata()
     },[])
}