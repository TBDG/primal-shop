import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/reducer";


function Tester() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="Tester">
            <h1> Counter {count} </h1>
            <button onClick={()=> dispatch(increment(count))}>+</button>
            <button onClick={() => dispatch(decrement(count))}>-</button>

        </div>

    );
}

export default Tester;
