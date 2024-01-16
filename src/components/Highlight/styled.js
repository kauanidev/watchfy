import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${({ posterUrl }) => posterUrl}) no-repeat center/cover;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 45px;

  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 48px;
  }

  p {
    font-size: 1.4rem;
    margin-top: 15px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.2rem;
      line-height: 38px;
    }

    p {
      margin-bottom: 20px;
    }
  }
`;
