import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './Header';
import Main from './Main';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default hot(module)(App);
