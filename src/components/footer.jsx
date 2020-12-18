import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: #9B9F94;
  font-size:0.85rem;
  margin: 2rem auto 0 auto;
  max-width:960px;
  text-align: center;
`

const Year = new Date().getFullYear()

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {`{ Vainilla } Podcast`} {Year}. Made with <span role='img' aria-label='love'>💛</span> for Front-end Devs.</p>
    </StyledFooter>
  );
};

export default Footer;