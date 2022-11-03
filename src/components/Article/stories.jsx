import { Article } from '.';

import mock from './mock';

export default {
  title: 'Article',
  component: Article,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <Article {...args} />
    </div>
  );
};
