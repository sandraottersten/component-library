import Dropdown from './index.svelte'
import DropdownOverview from './DropdownOverview.svelte'

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color'
      }
    }
  }
}

const Template = ({ ...args }) => ({
  Component: Dropdown,
  props: args
})

export const Overview = ({ ...args }) => ({
  Component: DropdownOverview,
  props: args
})

export const Default = Template.bind({})
Default.args = {
  items: ['Option 1', 'Option 2', 'Option 3'],
  removeSelected: 'Alla',
  disabled: false
}
