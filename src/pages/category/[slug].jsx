import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { loadPosts } from '../../api/load-posts';

export default function CategoryPage({ posts, setting }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  console.log('there is the attributes of postss!');
  console.log(posts.data[0].attributes.tags.data);

  // const categoryName = posts.data[0].attributes.categories.data.filter(
  //   (category) => category.attributes.slug === `${router.query.slug}`,
  // );

  const teste = posts.data[0].attributes.categories.data.filter(
    (x) => x.attributes.slug === `${router.query.slug}`,
  );

  console.log('there is categoryName!');
  console.log(teste);

  return (
    <>
      <Head>
        <title>
          Category: {teste[0].attributes.displayName} -{' '}
          {setting.attributes.blogName}
        </title>
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
    data = await loadPosts({ categorySlug: { eq: ctx.params.slug } });
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
