import styled from "styled-components";

export const Container = styled.header`
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 12vh;
  padding: 0 5vw;

  h1 {
    font-size: 2rem;
    font-family: cursive;
    color: #AD5034;
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;
    padding: 1rem 2vw;
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding: 0.5rem 1vw;
    h1 {
      font-size: 1.2rem;
    }
  }
`;

export const ContentInput = styled.section`
  border: solid 1px #AD5034;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  align-items: center;
  width: 25%;
  min-width: 180px;
  max-width: 350px;
  height: 5vh;
  padding: 0.3rem;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    background: transparent;
    padding-left: 0.7rem;
  }

  svg {
    color: #AD5034;
  }

  @media (max-width: 900px) {
    width: 60vw;
    max-width: 100%;
    margin: 0.5rem 0;
  }

  @media (max-width: 600px) {
    width: 90vw;
    min-width: 120px;
    font-size: 0.9rem;
    input {
      font-size: 0.9rem;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  min-width: 150px;
  gap: 1rem;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    gap: 0.5rem;
    button {
      font-size: 0.9rem;
      padding: 0.4rem 0.7rem;
    }
  }
`

interface ButtonAuthProps {
  isLogged: boolean;
}

export const ButtonAuth = styled.button<ButtonAuthProps>`
  background-color: ${(props) => props.isLogged ? '#9DF448' : '#AD5034'};
  color: ${(props) => props.isLogged ? '#000' : '#fff'};
  padding: 0.5rem 1rem;
  border: none;

    svg {
      font-size: 1rem;
    }


  &:hover {
    background-color: ${(props) => props.isLogged ? '#9DD918' : '#AD5034'};
  }
`

export const ButtonCart = styled.button`
  background-color: #AD5034;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;

    svg {
      font-size: 1rem;
    }

  &:hover {
    background-color: #9DD918;
  }
`