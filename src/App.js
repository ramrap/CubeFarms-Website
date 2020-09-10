import React from 'react';
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/font.css"
import "./css/style.css"
import 'aos/dist/aos.css';

import Homepage from './pages/Homepage'
import JoinUs from './pages/JoinUs'
import Outsource from './pages/Outsource'
import Advertising from './pages/Services/Advertising'
import Creative from './pages/Services/Creative'
import AboutUs from './pages/Company/AboutUs';
import Approach from './pages/Company/Approach'
import OutSource from './pages/Company/Outsource';
import Contact from './pages/Contact';

function App() {
    return (
        <Switch>
            <Route path="/about" component={AboutUs} />
            <Route path="/approach" component={Approach} />
            <Route path="/outsource" component={OutSource} />
            <Route path="/joinus" component={JoinUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/web" component={Outsource} />
            <Route path="/advertising" component={Advertising} />
            <Route path="/creative" component={Creative} />
            <Route path="/" component={Homepage} />
        </Switch>
    );
}

export default App;