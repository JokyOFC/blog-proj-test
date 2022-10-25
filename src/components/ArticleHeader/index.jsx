import P from 'prop-types';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const ArticleHeader = ({ title, description, image, metaData }) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Heading as="h1">{title}</Heading>
        <Heading as="p" size="small">
          {description}
        </Heading>
      </Styled.Header>
      <Styled.ImageContainer>
        <Styled.Image src={image} />
      </Styled.ImageContainer>

      <Styled.Container>
        <ArticleMeta
          createdAt={metaData.createdAt}
          author={metaData.author}
          categories={metaData.categories}
        />
      </Styled.Container>
      <Styled.LineContainer>
        <Styled.Line />
      </Styled.LineContainer>
    </Styled.Container>
  );
};

ArticleHeader.propTypes = {
  title: P.string,
  description: P.string,
  image: P.string,
  metaData: P.objectOf(
    P.shape({
      createdAt: P.string.isRequired,
      author: {
        slug: P.string.isRequired,
        displayName: P.string.isRequired,
      },
      categories: [
        {
          displayName: P.string.isRequired,
          slug: P.string.isRequired,
        },
        {
          displayName: P.string.isRequired,
          slug: P.string.isRequired,
        },
      ],
    }),
  ),
};
