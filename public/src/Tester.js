import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/reducer';
import DropDown from "./components/DropDown/DropDown";


function Tester() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1> Counter {count} </h1>
            <div className="Tester">
                <button onClick={() => dispatch(increment(count))}>+</button>
                <button onClick={() => dispatch(decrement(count))}>-</button>
            </div>
            <DropDown />
        </div>

    );
}

export default Tester;
