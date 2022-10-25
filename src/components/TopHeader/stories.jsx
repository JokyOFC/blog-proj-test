import { TopHeader } from '.';

export default {
  title: 'TopHeader',
  component: TopHeader,
  args: {
    children: 'Titulo',
    description: 'descrição',
    showText: true,
  },
  argTypes: {
    children: { type: 'string' },
    description: { type: 'string' },
    showText: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TopHeader {...args} />
    </div>
  );
};
