import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice2 = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 5
        },
        decrement: (state) => {
            state.value -= 5
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice2.actions

export default counterSlice2.reducer