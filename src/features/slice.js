import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    userId:'',
    email:''
}


const userDataTracking=createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        addInfo:(state,action)=>{
            state.userId=action.payload.userId
            state.email=action.payload.email
        },
        removeInfo:(state)=>{
            state.userId=''
            state.email=''
        }
    }
})

export const {addInfo,removeInfo}=userDataTracking.actions

export default userDataTracking.reducer