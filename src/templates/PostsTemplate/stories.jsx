import { PostsTemplate } from '.';
import mock from './mock';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
