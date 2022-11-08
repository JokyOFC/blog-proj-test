import P from 'prop-types';
import { PostCard } from '../PostCard';
import * as Styled from './styles';

export const PostGrid = ({ posts = [] }) => {
  return (
    <Styled.Container>
      {posts.length === 0 && (
        <Styled.NotFound>Nenhum post encontrado por aqui</Styled.NotFound>
      )}
      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post) => {
            console.log(post.attributes);
            return <PostCard key={`p1-${post.id}`} {...post.attributes} />;
          })}
      </Styled.Grid>
    </Styled.Container>
  );
};

PostGrid.propTypes = {
  post: P.array.isRequired,
};
