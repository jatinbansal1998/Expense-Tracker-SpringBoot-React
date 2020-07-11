import React from 'react';
import Category from "./Category";
import Expense from "./Expense";
import Home from "./Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/categories' exact={true} component={Category}/>
                <Route path='/expenses' exact={true} component={Expense}/>
            </Switch>
        </Router>
    );
}

export default App;
