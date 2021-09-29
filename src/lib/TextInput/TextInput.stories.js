import TextInput from './index.svelte'
import TextInputOverview from './TextInputOverview.svelte'
import "../_styles/tailwind.css"

export default {
    title: 'Forms/TextInput',
    component: TextInput,
}

export const Overview = ({ ...args }) => ({
    Component: TextInputOverview,
    props: args
})

const Template = ({ ...args }) => ({
    Component: TextInput,
    props: args
})

export const Primary = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true
}