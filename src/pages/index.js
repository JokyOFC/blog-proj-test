import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';
import { loadPosts } from '../api/load-posts';
import { theme } from '../styles/theme';

import { PostsTemplate } from '../templates/PostsTemplate';

import { GraphQLString } from 'graphql';

import { useEffect } from 'react';

export default function Home({ posts, setting }) {
  console.log(setting.attributes.blogDescription);
  return (
    <>
      <Head>
        <title>{setting.attributes.blogName}</title>
        <meta name="description" content={setting.attributes.blogDescription} />
      </Head>
      {console.log(setting.attributes)}
      <PostsTemplate posts={posts.data} settings={setting.attributes} />
    </>
  );
}

export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPosts({ categorySlug: { notNull: true } });
  } catch (e) {
    console.log(e);
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting.data,
    },
    revalidate: 24 * 60 * 60,
  };
};
