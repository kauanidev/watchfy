import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 55px;

  > div {
    flex: 1;

    > p {
      line-height: 26px;
      margin-top: 21px;
      margin-bottom: 30px;
    }
  }

  > img {
    width: 534px;
    height: 431px;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.gray};
    border-radius: 20px;
  }
`;

export const TitleAndRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  > h1 {
    font-size: 3.2rem;
    font-weight: 600;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 1.8rem;

    > svg {
      color: ${({ theme }) => theme.star};
      margin-bottom: 2px;
    }
  }
`;

export const MovieSpecifications = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 18px;
  font-weight: 500;
`;
