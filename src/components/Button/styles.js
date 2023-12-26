import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 17px 24px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
