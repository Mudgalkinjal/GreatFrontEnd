import TemperatureConverter from '.'

export default {
  title: 'Components/TemperatureConverter',
  component: TemperatureConverter,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'TemperatureConverter label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <TemperatureConverter />
export const Default = Template.bind({})
