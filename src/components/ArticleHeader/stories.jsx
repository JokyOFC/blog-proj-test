import { ArticleHeader } from '.';

import mock from '../ArticleMeta/mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: {
    title: 'ArticleHeader',
    description: 'teste teste',
    image: 'https://photoscissors.com/images/samples/3-before.jpg',
    metaData: mock,
  },
  argTypes: {},
};

export const Template = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
    </div>
  );
};
