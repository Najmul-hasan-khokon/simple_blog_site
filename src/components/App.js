import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Test from './Test';

export default function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/create">
                                <Create />
                            </Route>
                            <Route path="/blogs/:id">
                                <BlogDetails />
                            </Route>
                            <Route path="/test">
                                <Test />
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    );
}
