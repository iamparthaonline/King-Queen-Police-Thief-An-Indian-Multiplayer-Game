import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
// import Score from './pages/score'
import createGame from './pages/createGame';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create-game" component={createGame} />
      <Route path="/game/:gameId/instance/:instanceId/username/:username" component={Game} />
    </Switch>
  </main>
);

export default Main;
