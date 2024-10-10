import Tabs from '.'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Tabs label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <Tabs />
export const Default = Template.bind({})
