import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RatioState = {
    width: number;
    height: number;
    loss: number;
}

const initialState: RatioState = {
    width: 16,
    height: 9,
    loss: 20
}

const ratioSlice = createSlice({
    name: 'ratio',
    initialState,
    reducers: {
        setWidth(state: RatioState, action: PayloadAction<number>) {
            state.width = action.payload
        },
        setHeight(state: RatioState, action: PayloadAction<number>) {
            state.height = action.payload
        },
        setLoss(state: RatioState, action: PayloadAction<number>) {
            state.loss = action.payload
        }
    }
})

export const { setWidth, setHeight, setLoss } = ratioSlice.actions
export default ratioSlice.reducer