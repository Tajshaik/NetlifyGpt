import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const movieSlice = createSlice({
    name : 'movie',
    initialState: {
        nowPlayingMovies : null,
        popularMovies: null,
        topratedMovies: null,
        upcomingMovies: null,
        video : {}
    },
    reducers:{
        AddNowplayingMovies : (state, action)=>{
           state.nowPlayingMovies = action.payload
        },
        addTrailer: (state,action)=>{
            state.video = action.payload
        },
        AddpopularMovies : (state,action)=>{
            state.popularMovies = action.payload
        },
        AddtopratedMovies : (state, action)=>{
            state.topratedMovies = action.payload
        },
        AddupcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload
        }
    }
}) 

export default movieSlice.reducer
export const {AddNowplayingMovies, addTrailer, AddpopularMovies,AddtopratedMovies,AddupcomingMovies } = movieSlice.actions