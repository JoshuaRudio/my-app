import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  color: #9eafba;
  width: 60%;
  float: right;
  bottom: 0;
  overflow: hidden;
  height: 100px;
`;

const Footer = () => {
  return <StyledFooter>© Joshua Rudio 2018 | Build with React</StyledFooter>;
};

export default Footer;
