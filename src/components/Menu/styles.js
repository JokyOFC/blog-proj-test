import styled, { css } from 'styled-components';

import { Title as HeadingStyles } from '../Heading/styles';

import { Constainer as HeadTest } from '../LogoLink/styles';

const containerChanger = (menuVisible, theme) => css`
  left: ${menuVisible ? '0' : '-30rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '0' : '-32rem'};
  }
`;

export const Container = styled.div`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primaryColor};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    ${containerChanger(menuVisible, theme)}
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  a {
    color: white;
    padding: 1.5rem;
  }
  width: 100%;
`;

export const Logo = styled.nav`
  ${({ theme }) => css`
    img {
      min-height: 12.8rem;
      min-width: 12.8rem;
      border-radius: 10.2rem;
    }

    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};
      img {
        border: 0.5 solid ${theme.colors.secondaryColor};
      }
    }
  `}
`;

const buttonChanger = (menuVisible, theme) => css`
  left: ${menuVisible ? '26rem' : '1rem'};
  color: ${menuVisible ? theme.colors.secondaryColor : theme.colors.white};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '26rem' : '-0.5'};
  }
`;

export const OpenClose = styled.a`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primaryColor};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;
    ${buttonChanger(menuVisible, theme)}
  `}
`;
