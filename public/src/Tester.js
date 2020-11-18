import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/reducer';
import DropDown from "./components/DropDown/DropDown";

function Tester() {
    const [dropDown, setDropDown] = useState([]);
    const dropDownCallback = (dropDownData)  => {
        setDropDown([...dropDownData])
    }

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    

    return (
        <div>
            <h1> Counter {count} </h1>
            <div className="Tester">
                <button onClick={() => dispatch(increment(count))}>+</button>
                <button onClick={() => dispatch(decrement(count))}>-</button>
            </div>
            <DropDown 
                items= {[
                    {label: 'option1', value: 'option1'},
                    {label: 'option2', value: 'option2'},
                    {label: 'option3', value: 'option3'},
                ]}
                name='test menu'
                callback={dropDownCallback}
                multiple='true'
            />
            <h1>Selection: {dropDown}</h1>
        </div>

    );
}

export default Tester;
