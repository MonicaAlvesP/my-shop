import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 0;
  background: #222;
  color: #fff;
  text-align: center;
`;


export const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1rem;
`;

export const SocialIcon = styled.img`
  width: 28px;
  height: 28px;
  filter: invert(1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.15);
    filter: invert(0.7) sepia(1) saturate(5) hue-rotate(180deg);
  }
`;
