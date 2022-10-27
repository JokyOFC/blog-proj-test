import P from 'prop-types';
import * as Styled from './styles';

export const PostTags = ({ tags }) => {
  return (
    <Styled.Container>
      {tags.map((tag) => {
        <Link href={`/tag/${tag.slug}`}>{tag.displayName}</Link>;
      })}
    </Styled.Container>
  );
};

PostTags.propTypes = {
  tags: P.array.isRequired,
};
