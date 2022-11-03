import P from 'prop-types';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
  lineHeight = 'default',
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
      theme={theme}
      lineHeight={lineHeight}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  lineHeight: P.oneOf(['default', 'temp1', 'temp2']),
  uppercase: P.bool,
};
