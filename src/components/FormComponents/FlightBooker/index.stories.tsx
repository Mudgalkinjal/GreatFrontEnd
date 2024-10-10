import FlightBooker from '.'

export default {
  title: 'Components/FlightBooker',
  component: FlightBooker,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'FlightBooker label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <FlightBooker />
export const Default = Template.bind({})
