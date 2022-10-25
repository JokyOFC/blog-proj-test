import { TextComponent } from './index';
import mock from './mock';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: mock,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
