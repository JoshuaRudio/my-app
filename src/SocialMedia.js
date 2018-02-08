import React from 'react';
import github from './svg/Github.svg';
import instagram from './svg/Instagram.svg';
import linkedin from './svg/Linkedin.svg';
import snapchat from './svg/Snapchat.svg';
import twitter from './svg/Twitter.svg';

const SocialMedia = () => {
  return (
    <ul className="social-media">
      <li>
        <a href="https://www.github.com/joshuarudio" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={github} alt="github" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/joshua_from_seattle/" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={instagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/joshua-rudio" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://www.snapchat.com/add/truflippp206" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={snapchat} alt="snapchat" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/truflipx" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={twitter} alt="twitter" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
