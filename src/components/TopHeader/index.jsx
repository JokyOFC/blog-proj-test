import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { theme } from '../../styles/theme';

export const TopHeader = ({
  children,
  backgroundImage,
  description,
  showText,
}) => {
  return (
    <Styled.Container theme={theme}>
      <Styled.Profile backgroundImage={backgroundImage} />
      {showText ? (
        <Styled.TextContainer>
          <h2>{children}</h2>
          <p>{description}</p>
        </Styled.TextContainer>
      ) : (
        <></>
      )}
    </Styled.Container>
  );
};

TopHeader.propTypes = {
  children: P.node.isRequired,
  showText: P.bool,
  backgroundImage: P.string.isRequired,
  description: P.string.isRequired,
};
