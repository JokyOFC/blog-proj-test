import { PostTags } from '.';
import mock from './mock.';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        veritatis soluta modi earum facere! Nulla, aliquid saepe amet rem
        doloribus, repudiandae alias corrupti aspernatur, aliquam quia
        repellendus nemo expedita soluta.
      </p>
      <PostTags {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        veritatis soluta modi earum facere! Nulla, aliquid saepe amet rem
        doloribus, repudiandae alias corrupti aspernatur, aliquam quia
        repellendus nemo expedita soluta.
      </p>
    </div>
  );
};

export const NoTags = (args) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        veritatis soluta modi earum facere! Nulla, aliquid saepe amet rem
        doloribus, repudiandae alias corrupti aspernatur, aliquam quia
        repellendus nemo expedita soluta.
      </p>
      <PostTags {...args} tags={undefined} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        veritatis soluta modi earum facere! Nulla, aliquid saepe amet rem
        doloribus, repudiandae alias corrupti aspernatur, aliquam quia
        repellendus nemo expedita soluta.
      </p>
    </div>
  );
};
