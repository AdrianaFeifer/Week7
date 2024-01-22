// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import MusicPage from './pages/MusicPage';
import GenrePage from './pages/GenrePage';
import ForumPage from './pages/ForumPage';

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
