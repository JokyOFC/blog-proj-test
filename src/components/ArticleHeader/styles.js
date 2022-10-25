import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
  `}
`;

export const Header = styled.div`
  padding-bottom: 2rem;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 95%;
    height: 2%;
    border-bottom: 1px solid ${theme.colors.darkerGray};
  `}
`;

export const ImageContainer = styled.div`
  max-width: 256rem;
  max-height: 512rem;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
