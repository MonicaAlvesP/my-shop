import styled from "styled-components";

export const Container = styled.header`
  background-image: radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% );
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0 5vw;

  @media (max-width: 768px) {
    padding: 0 2vw;
  }
`;

export const Content = styled.section`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

export const ButtonAuth = styled.button`
  background-color: #2F3098;
  padding: 0.5rem 1rem;
  border: none;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1rem;
    }
  }

  &:hover {
    background-color: #3f40b8;
  }
`

export const ButtonCart = styled.button`
  background-color: #48C1F5;
  padding: 0.5rem 1rem;
  border: none;

  a {
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1rem;
    }
  }

  &:hover {
    background-color:rgb(164, 228, 255);
  }
`