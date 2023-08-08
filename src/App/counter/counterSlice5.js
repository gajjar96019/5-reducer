import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice5 = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, actions) => {
            state.value += parseInt(actions.payload * 2)
        },
        decrement: (state, actions) => {
            state.value -= parseInt(actions.payload * 2)
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice5.actions

export default counterSlice5.reducer