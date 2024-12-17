import styled from "styled-components";

interface AsideProps {
  showCart: boolean;
}

export const Aside = styled.aside<AsideProps>`
  position: fixed;
  left: ${(props) => (props.showCart ? "0" : "-350px")};
  top: 0;
  height: 100vh;
  transition: 0.5s;
  z-index: 1;

  width: 300px;
  background-color: #fff;

  padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  `

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `;

export const ProductItem = styled.li`
  color: #000000;
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
  }
`;

export const EmptyMessage = styled.p`
  padding: 1rem;
  text-align: center;
  color:#929292;
`;

export const TotalPrice = styled.div`
  margin-top: 2rem;
  color: #000000;
  font-size: 1.5rem;

  span {
    font-weight: bold;
  }
`;