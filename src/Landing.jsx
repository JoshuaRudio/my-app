import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 145px 60px 0px 60px;
  height: 500px;
  text-align: center;
  line-height: 2em;
  border-radius: 5px;
  color: #33acb7;
  h2 {
    font-family: garamond, sans-serif;
  }
  h1 {
    text-transform: uppercase;
  }
  a {
    color: #fff;
  }
`;

const Landing = () =>
  <Wrapper>
    <h2 className="welcome-statement">I am here to create beautiful and meaningful things.</h2>
    <h1>If you're looking for someone who's super chill and can do a ton of cool stuff:</h1>
    <div className="button-container">
      <div className="button">
        <a href="/contact">Hit me up!</a>
      </div>
    </div>
  </Wrapper>;

export default Landing;
