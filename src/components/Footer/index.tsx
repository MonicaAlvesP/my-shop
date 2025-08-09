import React from 'react';
import { FooterContainer, FooterText, SocialLinks, SocialIcon } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" />
        </a>
      </SocialLinks>
      <FooterText>© 2025 My Shop. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
