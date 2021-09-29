import Button from './index.svelte'
import ButtonOverview from './ButtonOverview.svelte'
import "../_styles/tailwind.css";

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'small']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit']
      }
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'ghost']
      }
    }
  }
}

export const Overview = ({ ...args }) => ({
  Component: ButtonOverview,
  props: args
})

const Template = ({ ...args }) => ({
  Component: Button,
  props: args
})

export const Primary = Template.bind({})
Primary.args = {
  size: 'large'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary'
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost'
}
