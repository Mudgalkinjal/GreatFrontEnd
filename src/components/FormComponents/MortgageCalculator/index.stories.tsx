import MortgageCalculator from '.'

export default {
  title: 'Components/MortgageCalculator',
  component: MortgageCalculator,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'MortgageCalculator label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <MortgageCalculator />
export const Default = Template.bind({})
