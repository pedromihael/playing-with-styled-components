import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  flex-direction: column;
  height: 100vh;
  overflow: visible;
  padding: 40px;
  grid-template-columns: 1fr;
  max-width: 60%;
  margin: auto;

  head {
    align-content: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }
`;
