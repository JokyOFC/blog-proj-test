import P from 'prop-types';
import { Article } from '../../components/Article';
import { BaseTemplate } from '../Base';
import { PostTags } from '../../components/PostTags';
import * as Styled from './styles';

export const PostTemplate = ({ settings, post }) => {
  return (
    <BaseTemplate settings={settings}>
      <Article {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
    </BaseTemplate>
  );
};

PostTemplate.propTypes = {
  children: P.node.isRequired,
};
