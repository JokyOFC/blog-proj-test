import styled, { css } from 'styled-components';

// export type PostContainerProps = {
//     size: 'max' | 'constent';
// }

const postContainerStyles = {
  max: (theme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme) => css`
    max-width: ${theme.sizes.content};
  `,
};

export const ArticleContainer = styled.div`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    ${postContainerStyles[size](theme)}
  `}
`;
