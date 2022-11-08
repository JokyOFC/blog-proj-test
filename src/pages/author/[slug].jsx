import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { loadPosts } from '../../api/load-posts';

export default function AuthorPage({ posts, setting }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;
  console.log(ctx);
  try {
    data = await loadPosts({ authorSlug: { eq: ctx.params.slug } });
    console.log('there is data!!');
    console.log(data.posts.data[0].attributes);
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
