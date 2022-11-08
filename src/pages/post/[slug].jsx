import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostTemplate } from '../../templates/PostTemplate';
import { loadPosts } from '../../api/load-posts';

export default function PostPage({ posts, setting }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  console.log('there is posts!!!');
  console.log(posts.data[0].attributes);
  console.log('there is Settings!!!');
  console.log(setting);
  return (
    <>
      <Head>
        <title>
          {posts.data[0].attributes.title} - {setting.attributes.blogName}
        </title>
        <meta name="description" content={posts.data[0].attributes.excerpt} />
      </Head>
      <PostTemplate
        post={posts.data[0].attributes}
        settings={setting.attributes}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  let data = null;
  let paths = [];

  try {
    data = await loadPosts({ categorySlug: { notNull: true } });
    paths = data.posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }));
  } catch (e) {
    console.log(e);
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;
  console.log(ctx);
  try {
    data = await loadPosts({ postSlug: { eq: ctx.params.slug } });
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
