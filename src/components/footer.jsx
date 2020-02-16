import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 2rem auto 0 auto;
  max-width:960px;
  text-align: center;
`

const Year = new Date().getFullYear()

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; NRDWARE {Year}. Made with <span role='img' aria-label='love'>❤️</span> by NRDWARE fans.</p>
    </StyledFooter>
  );
};

export default Footer;