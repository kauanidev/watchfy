import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.7rem 2rem;
  font-weight: 500;

  > nav {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    > a {
      color: ${({ theme }) => theme.white};
      text-decoration: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
    }
  }
`;
