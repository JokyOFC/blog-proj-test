import { PostTags } from '.';
import mock from './mock.';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <PostTags {...args} />
    </div>
  );
};
