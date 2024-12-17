import styled from "styled-components";

export const Card = styled.section`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem;
  box-shadow: 0 0 10px #ccc;
  transition: transform 0.2s;
  background-color: #fff;
  text-align: center;
  padding: 0.5rem;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h2 {
    font-size: 1rem;
  }
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  span {
    font-size: 0.7rem;
    
    svg {
      font-size: 0.75rem;
    }
  }
`;



export const AddToCartButton = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #AD5034;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color:rgb(238, 111, 73);
    }
  }
`;

export const RemoveFromCartButton = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #9DF448;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #9DD918;
    }
  }
`