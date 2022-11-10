import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
   background: ${theme.colors.primaryColor};
   color ${theme.colors.white};
   border: none;
   padding: ${theme.spacings.small} ${theme.spacings.large};
   cursor: pointer;

   &:disabled {
    background: ${theme.colors.darkGray};
   }
  `}
`;
