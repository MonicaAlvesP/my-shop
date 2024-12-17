import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.9s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    padding: 6px 20px;
    border-radius: 50%;
    z-index: 10;
  }

  button:first-child {
    left: 20px;
  }

  button:last-child {
    right: 20px;
  }
`;
