import { useState } from 'react';
import * as Styled from './styles';
import P from 'prop-types';
import { BaseTemplate } from '../Base';

import { PostGrid } from '../../components/PostGrid';
import { loadPosts } from '../../api/load-posts';

export const PostsTemplate = ({ settings, posts = [], variables }) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    console.log();

    const newVariables = {
      ...stateVariables,
      state: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    console.log('there is new variables!');
    console.log(newVariables);

    const morePosts = await loadPosts(newVariables);

    console.log('there is more posts!');
    console.log(morePosts);

    if (!morePosts || !morePosts.posts.data || !morePosts.posts.data.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    console.log(morePosts.posts);
    setStatePosts((p) => [...p, ...morePosts.posts.data]);
  };

  return (
    <BaseTemplate settings={settings} head={true}>
      <PostGrid posts={statePosts} />
      <Styled.ButtonContainer>
        <Styled.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
          {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
        </Styled.Button>
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};

PostsTemplate.propTypes = {
  children: P.node.isRequired,
};
