import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    userId:'',
    email:'',
    cartId:''
}


const userDataTracking=createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        addInfo:(state,action)=>{
            state.userId=action.payload.userId
            state.email=action.payload.email
            state.cartId=action.payload.cartId
        },
        removeInfo:(state)=>{
            state.userId=''
            state.email=''
            state.cartId=''
        }
    }
})

export const {addInfo,removeInfo}=userDataTracking.actions

export default userDataTracking.reducer