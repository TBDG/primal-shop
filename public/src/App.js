import './App.scss';
import React, { useState } from 'react';
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
            {/*<Footer />*/}
            <div> Footer space</div>
        </div>
    );
}

export default App;
