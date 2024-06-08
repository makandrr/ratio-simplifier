import { configureStore } from "@reduxjs/toolkit";
import ratioSlice from "./ratioSlice";

const store = configureStore({
    reducer: {
        ratio: ratioSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store