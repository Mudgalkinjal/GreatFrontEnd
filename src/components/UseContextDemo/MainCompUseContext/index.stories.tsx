import MainCompUseContext from '../MainCompChild'

export default {
  title: 'Components/MainCompUseContext',
  component: MainCompUseContext,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'MainCompUseContext label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <MainCompUseContext />
export const Default = Template.bind({})
