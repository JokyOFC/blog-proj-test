import P from 'prop-types';
import { BaseTemplate } from '../Base';

import { PostGrid } from '../../components/PostGrid';

export const PostsTemplate = ({ settings, posts }) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};

PostsTemplate.propTypes = {
  children: P.node.isRequired,
};
