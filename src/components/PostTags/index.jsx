import P from 'prop-types';
import * as Styled from './styles';

import Link from 'next/link';

export const PostTags = ({ tags = [] }) => {
  console.log('there is tags!!!');
  console.log(tags.data);
  if (tags.data[0].length === 0) {
    return null;
  }
  return (
    <Styled.Container>
      tags:
      {tags.data.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.attributes.slug}`}>
              <a>{tag.attributes.displayName}</a>
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
