import ContactUs from '.'

export default {
  title: 'Components/ContactUs',
  component: ContactUs,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ContactUs label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <ContactUs />
export const Default = Template.bind({})
