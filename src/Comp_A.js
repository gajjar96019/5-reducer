import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './App/counter/counterSlice';

function Comp_A() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
        </>
    )
}

export default Comp_A;
