import styled from "styled-components";

export const Container = styled.main`
  display: flex;
`;

export const Content = styled.section`
  flex: 1;
  position: relative;
  padding-bottom: 5rem;
  height: 100vh;
  overflow-y: auto;

  > header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
`;

export const MoviesList = styled.section`
  margin-top: 40px;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  > h2 {
    margin-bottom: 25px;
    font-size: 2rem;
    font-weight: 600;
  }
`;
