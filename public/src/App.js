import React from 'react';
import './App.scss';
import Footer from './Footer/footer.js';
import { useSelector } from "react-redux";
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


    let func = () => {
        setShowDiv(!showDiv);
    };

    return (
        <div className="App">
            <div> Header space</div>
            {/*<Header />*/}

            {showDiv ? <div>
                <p>{general.accept}</p>
                <p>{general.contactEmail}</p>
            </div> : null}

            <button onClick={() => func()}>change</button>

            {/*TODO Remove later*/}
            <FaFacebookSquare style={styles}></FaFacebookSquare>
            <div> Footer space</div>

            <h1> Counter {count} </h1>
            <Tester/>
            <Footer />
        </div>

    );
}

export default App;
