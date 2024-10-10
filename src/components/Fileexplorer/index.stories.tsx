import FileExplorer from '.'

export default {
  title: 'Components/FileExplorer',
  component: FileExplorer,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'FileExplorer label or content',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <FileExplorer {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Content',
}
