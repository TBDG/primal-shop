import React from 'react';
import './App.scss';
import Footer from './Footer/footer.js';

// Icon example will be removed later
import { FaFacebookSquare } from 'react-icons/fa';

function App() {
    let styles = {
        color: 'black',
        'font-size': 30,
    };
    return (
        <div className="App">
            <div> Header space</div>
            {/*<Header />*/}
            <Footer />
            {/*TODO Remove later*/}
            <FaFacebookSquare style={styles}></FaFacebookSquare>
            <div> Footer space</div>
        </div>

    );
}

export default App;
