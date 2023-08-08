import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './App/counter/counterSlice';
import { useState } from 'react';

function Comp_E() {

    const [val, setval] = useState()

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>{count}</h1>

            <input type="text" onChange={(e) => setval(e.target.value)} />

            <button onClick={() => dispatch(increment(val))}>increment</button>
            <button onClick={() => dispatch(decrement(val))}>decrement</button>
        </>
    )
}

export default Comp_E;
