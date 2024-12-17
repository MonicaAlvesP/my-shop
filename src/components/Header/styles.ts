import styled from "styled-components";

export const Container = styled.header`
  background-color:rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 12vh;
  padding: 0 5vw;

  h1 {
    font-size: 2rem;
    font-family: cursive;
    color: #AD5034;
  }

  @media (max-width: 768px) {
    padding: 0 2vw;
  }
`;

export const ContentInput = styled.section`
  border: solid 1px #AD5034;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  align-items: center;
  width: 25%;
  height: 5vh;
  padding: 0.3rem;

  input {
    width: 100%;
    border: none;
    outline: none;
  }

  svg {
    color: #AD5034;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;

  @media (max-width: 768px) {
    gap: 1rem;
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