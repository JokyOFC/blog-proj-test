import P from 'prop-types';
import * as Styled from './styles';

import Link from 'next/link';

export const PostTags = ({ tags = [] }) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Styled.Container>
      tags:
      {tags.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.slug}`}>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Styled.Container>
  );
};

PostTags.propTypes = {
  tags: P.array.isRequired,
};
