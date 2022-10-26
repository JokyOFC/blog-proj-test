import { Article } from '.';

import mockContent from '../TextComponent/mock';

import mockMetadata from '../ArticleMeta/mock';

export default {
  title: 'Article',
  component: Article,
  args: {
    title: 'Article',
    description: 'description',
    image: 'https://photoscissors.com/images/samples/3-before.jpg',
    metaData: mockMetadata,
    children: mockContent,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Article {...args} />
    </div>
  );
};
