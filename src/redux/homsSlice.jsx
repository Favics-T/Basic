import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState={
    data:[],
    userInfo:[]
}

export const homsSlice = createSlice({
    name:"homs",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const el = state.data.find((el)=> el.id === action.payload.id)
            if(el){
                el.quantity += action.payload.quantity;
            }else(
                state.data.push(action.payload) 
            )
           
        },
        increment:(state,action)=>{
            const el = state.data.find((el)=>el.id=== action.payload)  
            el.quantity++
        },
        decrement:(state,action)=>{
            const el = state.data.find((el)=>el.id=== action.payload)  
            if(el.quantity ===1){
                el.quantity=1
            }
            else{
            el.quantity--

            }
        },
        deleteItem:(state,action)=>{
            state.data = state.data.filter((el)=>el.id!== action.payload)
        },
        resetCart:(state)=>{
            state.data=[]

        }
    }
})

export const {addToCart,deleteItem,resetCart,increment,decrement}=homsSlice.actions;

export default homsSlice.reducer;