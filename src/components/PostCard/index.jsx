import P from 'prop-types';
import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';

export const PostCard = ({ title, cover, excerpt, slug }) => {
  console.log('this is cover');
  console.log(slug);
  return (
    <Styled.Container>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.data.attributes.url} />
        </a>
      </Link>
      <Heading as="h2" size="small" lineHeight="temp2">
        <Link href={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Container>
  );
};

PostCard.propTypes = {
  title: P.string.isRequired,
  author: P.object.isRequired,
  categories: P.array.isRequired,
  content: P.string.isRequired,
  cover: P.object.isRequired,
  createdAt: P.string.isRequired,
  excerpt: P.string.isRequired,
  allowComments: P.bool.isRequired,
  tags: P.array.isRequired,
  id: P.string.isRequired,
  slug: P.string.isRequired,
};
