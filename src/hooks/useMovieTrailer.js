import React,{useEffect} from 'react'
import { options } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailer } from '../Utils/movieSlice'

const useMovieTrailer = (movieId) => {
    console.log(movieId)
    const dispatch = useDispatch()
    const getTrailer = async()=>{
        if(movieId !== null){
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', options)
        const jsonData = await data.json()
        const filterData = jsonData?.results
        const trailerData = filterData.filter((video) => video.type === "Trailer")
        const Trailer = trailerData.length > 1 ? trailerData[0] : trailerData
        console.log(Trailer)
       dispatch(addTrailer(Trailer))
        }
    }
 useEffect(()=>{
    getTrailer()
 },[])
}

export default useMovieTrailer