import ImageCarousel from '.'

export default {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ImageCarousel label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = () => <ImageCarousel />
export const Default = Template.bind({})
