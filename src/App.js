import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Footer from './Footer.js';
import About from './About.js';
import './App.scss';

const App = () =>
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>;

export default App;
