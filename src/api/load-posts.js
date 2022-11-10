import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_FRAGMENTS } from '../graphql/fragments';
import { GRAPHQL_QUERY } from '../graphql/queries';

export const defaultLoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 1,
};

export const loadPosts = async (
  variables = {
    categorySlug,
    postSlug,
    postSearch,
    authorSlug,
    tagSlug,
    sort,
    start,
    limit,
  },
) => {
  const data = await request(config.graphQLURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  }).then((response) => {
    return response;
  });

  console.log(data);

  return data;
};
