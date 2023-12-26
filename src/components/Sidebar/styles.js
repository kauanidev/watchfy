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
`;
