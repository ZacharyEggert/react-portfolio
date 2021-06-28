import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './util/GlobalState';

import Works from './pages/Works'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <Switch>
                    <Route path='/works' component={Works}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/about' component={About}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/notfound' component={NotFoundPage} />
                    <Route path='/'>
                        <Redirect to='/notfound'/>
                    </Route>
                </Switch>
            </Router>
        </GlobalProvider>
    );
};

export default App;
