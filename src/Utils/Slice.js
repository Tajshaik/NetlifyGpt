import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'User',
    initialState: null,
    reducers : {
        AddUser : (state, action)=>{
         return action.payload 
        },
        RemoveUser: (state)=>{
            return null
        }
    }
})

export default AuthSlice.reducer

export const {AddUser, RemoveUser} = AuthSlice.actions