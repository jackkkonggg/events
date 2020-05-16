import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Home from './Home';
import EventPage from './EventPage'
import NavBar from './NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/events/:id" exact component={EventPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
