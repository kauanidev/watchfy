import styled from "styled-components";

export const Container = styled.div`
  background: url(/images/movie1.jpeg) no-repeat center/cover;
  width: 100%;
  height: 30rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.gray};
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  transition: 0.5s;

  > div {
    opacity: 0.95;
    background: linear-gradient(
      100deg,
      #fff 12.94%,
      rgba(255, 255, 255, 0) 159.1%
    );
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 20px;
    color: ${({ theme }) => theme.black};

    > p {
      font-weight: 600;
    }

    > span {
      font-size: 1.2rem;
    }
  }

  &:hover {
    filter: brightness(1.3);
  }
`;
