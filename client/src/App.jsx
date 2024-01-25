// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import FilmsPage from './pages/movies';
import MusicPage from './pages/music';
import GenrePage from './pages/genre';
import ForumPage from './pages/forum';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/films" component={FilmsPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/genre" component={GenrePage} />
        <Route path="/forum" component={ForumPage} />
      </Switch>
    </Router>
  );
};

export default App;
