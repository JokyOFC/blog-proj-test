import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_FRAGMENTS } from '../graphql/fragments';
import { GRAPHQL_QUERY } from '../graphql/queries';

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
  const defaultVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphQLURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  }).then((response) => {
    return response;
  });

  console.log(data);

  return data;
};
