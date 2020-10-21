import React from 'react';
import './App.scss';
import Footer from './Footer/footer.js';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/reducer";
import Tester from "./Tester";
import { useState } from 'react';
import { getContent } from './content';

// Icon example will be removed later
import { FaFacebookSquare } from 'react-icons/fa';


function App() {
    const { general } = getContent();

    const [showDiv, setShowDiv] = useState(false);

    let styles = {
        color: 'black',
        'fontSize': 30,
    };
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();




    let func = () => {
        setShowDiv(!showDiv);
    };

    return (
        <div className="App">
            <div> Header space</div>
            {/*<Header />*/}
            <h1> Counter {count} </h1>
            <button onClick={()=> dispatch(increment(count))}>+</button>
            <button onClick={() => dispatch(decrement(count))}>-</button>

            {showDiv ? <div>
                <p>{general.accept}</p>
                <p>{general.contactEmail}</p>
            </div> : null}

            <button onClick={() => func()}>change</button>

            {/*TODO Remove later*/}
            <FaFacebookSquare style={styles}></FaFacebookSquare>
            <div> Footer space</div>
            <Tester/>
            <Footer />
        </div>

    );
}

export default App;
