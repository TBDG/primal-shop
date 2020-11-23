import React from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer.js';
import Tester from "./Tester";
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Contact from './components/Contact/Contact';
import Category from './components/Category/Category';


function App() {

    return (
        <div className="App">
            <div className="app-main">
                <Header/>
                <Router>
                    <Switch>    
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return (
                                <Redirect to="/home" />
                                )
                            }}
                        />
                        <Route path="/home/" component={Home}/>

                        <Route path="/shop/" component={Shop}/>
                        <Route path="/category/:slug" component={Category}/>
                        <Route path="/contact/" component={Contact}/>
                        <Route path="/test/" component={Tester}/>
                    </Switch>    
                </Router>
            </div>
            <div className="app-footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
