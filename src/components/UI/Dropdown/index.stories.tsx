import Dropdown from '.'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Dropdown placeholder',
    },
    onSelect: { action: 'Selected' },
  },
}

// Default story template
const Template = (args: any) => <Dropdown {...args} />
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3'],
}
