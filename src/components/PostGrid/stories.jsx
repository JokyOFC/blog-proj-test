import { PostGrid } from '.';

import mock from './mock';

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: mock,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};

export const NoPosts = () => {
  return (
    <div>
      <PostGrid />
    </div>
  );
};
