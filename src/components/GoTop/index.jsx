import P from 'prop-types';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
import { theme } from '../../styles/theme';

export const GoTop = () => {
  return (
    <Styled.Container
      theme={theme}
      href="#"
      aria-label="Go to top"
      title="Go to top"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
