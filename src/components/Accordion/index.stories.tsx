import Accordion from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Accordion label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <Accordion />
export const Default = Template.bind({})
