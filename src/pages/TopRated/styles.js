import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  @media (max-width: 768px) {
    margin-top: 6rem;
  }
`;

export const Content = styled.section`
  flex: 1;
  position: relative;
  padding-bottom: 5rem;
  height: 100vh;
  overflow-y: auto;
`;

export const MoviesList = styled.section`
  margin-top: 30px;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(217px, 1fr));
    gap: 24px;
  }

  > h2 {
    margin-bottom: 25px;
    font-size: 2rem;
    font-weight: 600;
  }
`;
