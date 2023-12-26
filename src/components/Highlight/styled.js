import styled from "styled-components";

export const Container = styled.div`
  background: url("/images/banner.png") no-repeat center/cover;
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
`;
