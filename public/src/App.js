import React from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer.js';
import Tester from "./Tester";
import Home from './Home/Home';


function App() {

    return (
        <div className="App">
            <div className="app-main">
                <Header/>
                <Router>
                    <Redirect from="/" to="/home/"/>
                    <Route path="/home/" component={Home}/>

                    <Route path="/test/" component={Tester}/>
                </Router>
            </div>
            <div className="app-footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
