import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    span {
      margin: 0 0 0 0.5rem;
    }

    span::before {
      content: ' ';
    }

    span::after {
      content: ', ';
    }

    span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(80%);
      }
    }
  `}
`;
