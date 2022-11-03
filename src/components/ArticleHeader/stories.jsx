import { ArticleHeader } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
    </div>
  );
};
