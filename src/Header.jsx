import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

const Header = () =>
  <div className="App-header">
    <a href="/">
      <img src={logo} className="App-logo" alt="logo" />
    </a>
    <h1 className="App-title">Joshua Rudio</h1>
    <ul>
      <li className="category">Website</li>
      <li>Something</li>
      <li>
        <a href="/about">About me</a>
      </li>
    </ul>
  </div>;

export default Header;
