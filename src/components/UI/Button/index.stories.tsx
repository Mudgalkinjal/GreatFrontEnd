import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label or content',
    },
    onClick: { action: 'clicked' },
  },
}

// Default story template
const Template = (args: any) => <Button {...args} />
export const Default = Template.bind({})
Default.args = {
  children: 'Click Me!',
}
