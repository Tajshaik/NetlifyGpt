import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState: {
        nowPlayingMovies : null,
        video : {}
    },
    reducers:{
        AddNowplayingMovies : (state, action)=>{
           state.nowPlayingMovies = action.payload
        },
        addTrailer: (state,action)=>{
            state.video = action.payload
        }
    }
}) 

export default movieSlice.reducer
export const {AddNowplayingMovies, addTrailer} = movieSlice.actions