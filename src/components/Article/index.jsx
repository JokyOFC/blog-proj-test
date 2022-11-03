import P from 'prop-types';
import * as Styled from './styles';

import { ArticleHeader } from '../ArticleHeader';
import { TopHeader } from '../TopHeader';
import { TextComponent } from '../TextComponent';

import { ArticleContainer } from '../ArticleContainer';

export const Article = ({
  title,
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}) => {
  return (
    <Styled.Container>
      <ArticleContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          title={title}
          excerpt={excerpt}
          id={id}
          cover={cover}
          createdAt={createdAt}
        />
      </ArticleContainer>
      <ArticleContainer size="content">
        <TextComponent>{content}</TextComponent>
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
