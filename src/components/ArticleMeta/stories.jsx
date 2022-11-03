import { ArticleMeta } from '.';

import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: {
    createdAt: mock.createdAt,
    author: mock.author,
    categories: mock.categories,
    title: mock.title,
  },
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
      author: { type: null },
      categories: { type: null },
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};

export const NoAuthor = (args) => {
  return (
    <div>
      <ArticleMeta {...args} author={undefined} />
    </div>
  );
};

export const NoCategories = (args) => {
  return (
    <div>
      <ArticleMeta {...args} categories={undefined} />
    </div>
  );
};

export const NoAuthorAndCategories = (args) => {
  return (
    <div>
      <ArticleMeta {...args} author={undefined} categories={undefined} />
    </div>
  );
};
