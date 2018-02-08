import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Footer from './Footer.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import './App.scss';

const App = () =>
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>;

export default App;
