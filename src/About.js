import React from 'react';
import picture from './picture.jpg';

const About = () =>
  <div className="about">
    <h1>About</h1>
    <img className="dbc-pic" src={picture} alt="dbc-pic" />
    <p>
      I am a Web Developer and Musician born and raised in Seattle, WA. I am currently looking for new opportunities in
      Full Stack Development.
    </p>
    <p>
      My first exposure as a Web Developer began as a 6th grader customizing his Neopets, MySpace, and Xanga webpages.
      I've always been curious about technology but never really pursued a career in the tech industry until 2017. I
      worked in customer service, retail, and hospitality for 5 years before deciding to join{' '}
      <a href="https://devbootcamp.com/" target="_blank" rel="noopener noreferrer">
        Dev Bootcamp
      </a>{' '}
      in early 2017 to aquire my Full-Stack Web Development Certificate. I believe knowledge is power so it is common to
      catch me brushing up on my code skills on HackerRank or learning new frameworks and languages via SoloLearn and
      Frontend Masters.
    </p>
    <p>
      While I'm not working or learning, you may find me strumming chords on my guitar, playing video games (especially
      fighting games - For Honor, Tekken 7, Street Fighter, etc.), binge watching the greatest Netflix has to offer with
      my wife, or just chillin with my two cats, Alphonse and Edward (kudos if you catch that reference.)
    </p>
    <p>
      Don't be a stranger! I would like to brainstorm the next big thing with you and see where it could take us. Feel
      free to add me on social media!
    </p>
  </div>;

export default About;
