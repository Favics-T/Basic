import { configureStore } from "@reduxjs/toolkit";
import homsreducer from "../redux/homsSlice"






export const store = configureStore({
    reducer: {homsreducer},
   
});

