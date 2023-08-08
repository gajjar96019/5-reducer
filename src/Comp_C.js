import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './App/counter/counterSlice';

function Comp_C() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => dispatch(increment())}>+15</button>
            <button onClick={() => dispatch(decrement())}>-15</button>
        </>
    )
}

export default Comp_C;
