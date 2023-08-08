import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice3 = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 15
        },
        decrement: (state) => {
            state.value -= 15
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice3.actions

export default counterSlice3.reducer