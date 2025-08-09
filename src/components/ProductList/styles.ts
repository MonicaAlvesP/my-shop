import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  margin-bottom: 8rem;

  & > * {
    flex: 1 300px;
  }
`;