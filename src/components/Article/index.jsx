import P from 'prop-types';
import * as Styled from './styles';

import { ArticleHeader } from '../ArticleHeader';
import { TopHeader } from '../TopHeader';
import { TextComponent } from '../TextComponent';

import { ArticleContainer } from '../ArticleContainer';

export const Article = ({ title, description, image, metaData, children }) => {
  return (
    <Styled.Container>
      <ArticleContainer size="max">
        <ArticleHeader
          title={title}
          description={description}
          image={image}
          metaData={metaData}
        />
      </ArticleContainer>
      <ArticleContainer size="content">
        <TextComponent>{children}</TextComponent>
      </ArticleContainer>
    </Styled.Container>
  );
};

Article.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  image: P.string.isRequired,
  metaData: P.object.isRequired,
  children: P.node.isRequired,
};
