import React from 'react';
import * as ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Redirect } from "react-router-dom";

import SignUp from './components/view/SignUp';
import SignIn from './components/view/SignIn';
import ClassRooms from './components/view/ClassRooms';
import Assignments from './components/view/Assignments';


const routing = <Router>
    <Switch>
        <Route exact path="/">
            <Redirect to="/signin"/>
        </Route>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/class-rooms" component={ClassRooms}/>
        <Route path="/assignments" component={Assignments}/>
    </Switch>
</Router>;





ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();


