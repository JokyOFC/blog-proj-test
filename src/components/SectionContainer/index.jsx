import P from 'prop-types';

import * as Styled from './styles';

import { theme } from '../../styles/theme';

export const SectionContainer = ({ children, background = false }) => {
  return <Styled.Container theme={theme}>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,

  background: P.bool,
};
