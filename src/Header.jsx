import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

const Header = () =>
  <div className="App-header">
    <a href="/">
      <img src={logo} className="App-logo" alt="logo" />
    </a>
    <ul className="nav">
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>;

export default Header;
