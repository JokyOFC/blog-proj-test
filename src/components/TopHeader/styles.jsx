import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 0 auto;
    @media (max-width: 72rem) {
      flex-direction: column;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding-left: 2rem;
  h2 {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 72rem) {
    margin-top: 3rem;
    max-width: 30rem;
    padding-left: 0;
    h2,
    p {
      text-align: center;
    }
  }
`;

export const Profile = styled.img`
  ${({ theme, backgroundImage }) => css`
    ${!backgroundImage
      ? `background-color:#d9d9d9;`
      : `background-image:url(${backgroundImage});`}
    width: 15rem;
    height: 15rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
    border-radius: 10rem;
  `}
`;
