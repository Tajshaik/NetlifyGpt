import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState:{
        video : null
    },
    reducers:{
        addTrailer: (state,action)=>{
            state.video = action.payload
        }
    }

})

export default videoSlice
export const {addTrailer} = videoSlice.actions