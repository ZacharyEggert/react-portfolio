import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './util/GlobalState';

import Header from './components/Header';
import Works from './pages/Works'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer'


const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <Header />
                <Switch>
                    <Route path='/works' component={Works}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/about' component={About}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/' component={NotFoundPage}/>
                </Switch>
                <Footer />
            </Router>
        </GlobalProvider>
    );
};

export default App;
