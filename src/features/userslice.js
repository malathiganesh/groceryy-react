import {createSlice} from '@reduxjs/toolkit';

export const userSlice =createSlice({
    name:'user',
    initialState:{
        user:{
            loggedIn:false
        }
    },
    reducers:{
        login:(state, action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user.loggedIn=false;
        },
    },
});
export const {login, logout} =userSlice.actions;
export const selectUser =(state)=>state.user.user;
export default userSlice.reducer;