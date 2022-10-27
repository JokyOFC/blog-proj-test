import styled, { css } from 'styled-components';

import { Title as HeadingStyles } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      line-height: 2.5rem;
      margin: 0;
      margin-top: calc(${theme.spacings.small} - 0.6rem);
      margin-bottom: ${theme.spacings.small};
    }
    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondaryColor};
    }

    &:hover a {
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    transition: opacity 300ms ease-in-out;
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css``}
`;
