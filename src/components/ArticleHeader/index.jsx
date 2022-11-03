import P from 'prop-types';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import { Cover } from '../PostCard/styles';
import * as Styled from './styles';

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Heading as="h1">{title}</Heading>
        <Heading as="p" size="small">
          {excerpt}
        </Heading>
      </Styled.Header>
      <Styled.ImageContainer>
        <Styled.Image src={cover.url} />
      </Styled.ImageContainer>

      <Styled.Container>
        <ArticleMeta
          categories={categories}
          author={author}
          createdAt={createdAt}
        />
      </Styled.Container>
      <Styled.LineContainer>
        <Styled.Line />
      </Styled.LineContainer>
    </Styled.Container>
  );
};

ArticleHeader.propTypes = {
  id: P.string,
  title: P.string,
  excerpt: P.string,
  cover: P.string,
};
