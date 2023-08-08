import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import counterSlice2 from './counter/counterSlice2'
import counterSlice3 from './counter/counterSlice3'
import counterSlice4 from './counter/counterSlice4'
import counterSlice5 from './counter/counterSlice5'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        counter: counterSlice2,
        counter: counterSlice3,
        counter: counterSlice4,
        counter: counterSlice5,
    },
})