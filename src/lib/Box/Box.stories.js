import Box from './index.svelte'
import BoxOverview from './BoxOverview.svelte'

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color'
      }
    }
  }
}

const Template = ({ ...args }) => ({
  Component: Box,
  props: args
})

export const Overview = ({ ...args }) => ({
  Component: BoxOverview,
  props: args
})

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#deabde'
}
