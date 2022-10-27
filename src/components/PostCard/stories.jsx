import { PostCard } from '.';
import mock from './mock';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    title: mock.title,
    author: mock.author,
    allowComments: mock.allowComments,
    categories: mock.categories,
    content: mock.content,
    cover: mock.cover,
    createdAt: mock.createdAt,
    excerpt: mock.excerpt,
    tags: mock.tags,
    id: mock.id,
    slug: mock.slug,
  },
  argTypes: {},
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '32rem' }}>
      <PostCard {...args} />
    </div>
  );
};
