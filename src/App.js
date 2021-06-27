import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './util/GlobalState';
import NavBar from './components/NavBar';
const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <NavBar />
                <Switch>
                    
                </Switch>
            </Router>
        </GlobalProvider>
    );
};

export default App;
