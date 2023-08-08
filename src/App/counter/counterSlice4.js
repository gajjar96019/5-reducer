import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice4 = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, actions) => {
            state.value += parseInt(actions.payload)
        },
        decrement: (state, actions) => {
            state.value -= parseInt(actions.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice4.actions

export default counterSlice4.reducer