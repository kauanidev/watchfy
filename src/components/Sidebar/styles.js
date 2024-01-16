import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.aside`
  background: ${({ theme }) => theme.backgroundSidebar};
  width: 27.4rem;
  height: 100vh;
  padding: 4rem;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    font-size: 1.8rem;
    margin-bottom: 6rem;
  }

  > nav {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background: rgba(15, 15, 14, 0.7);
    backdrop-filter: blur(5px);

    > nav {
      flex-direction: row;
      gap: 2rem;
    }

    > div {
      margin-bottom: 0;
      font-size: 1.2rem;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 350px) {
    padding: 2rem 1rem;

    div {
      font-size: 0.9rem;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: ${({ theme }) => theme.gray};
  text-decoration: none;

  > svg {
    font-size: 2.4rem;
  }

  ${({ isActive, theme }) =>
    isActive === true &&
    css`
      font-weight: 700;
      color: ${theme.white};
    `}

  @media(max-width: 500px) {
    font-size: 1.2rem;
    gap: 0.5rem;

    > svg {
      font-size: 2rem;
    }
  }
`;
