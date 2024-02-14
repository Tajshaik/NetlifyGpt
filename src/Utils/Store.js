import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './Slice'
import movieSlice from './movieSlice'

const store = configureStore({
    reducer:{
        User : AuthReducer,
        Movies : movieSlice
    }
})

export default store