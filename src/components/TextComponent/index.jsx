import P from 'prop-types';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container
      theme={theme}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
