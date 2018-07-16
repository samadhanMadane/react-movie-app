import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Header from './components/Header';
import MoviesPage from './components/MoviesPage';
import EventsPage from './components/EventsPage';
import MovieDetails from './components/MovieDetails';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/movies" exact component={MoviesPage}/>
          <Route path="/events" exact component={EventsPage}/>
          <Route path="/movies/:movieId" component={MovieDetails}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
