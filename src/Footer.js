import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia.js';

const StyledFooter = styled.div`
  color: #9eafba;
  width: 60%;
  margin: 0 auto;
  bottom: 0;
  overflow: hidden;
  height: 100px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialMedia />
      <p className="copyright">© Joshua Rudio 2018 | Build with React</p>
    </StyledFooter>
  );
};

export default Footer;
