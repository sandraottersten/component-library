import TextInput from './index.svelte';
import TextInputOverview from './TextInputOverview.svelte';
import '../_styles/tailwind.css';
import WarningIcon from '../_assets/icon_warning.svg';
import ErrorIcon from '../_assets/icon_error.svg';

export default {
	title: 'Forms/TextInput',
	component: TextInput
};

export const Overview = ({ ...args }) => ({
	Component: TextInputOverview,
	props: args
});

const Template = ({ ...args }) => ({
	Component: TextInput,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Example text'
};

export const Warning = Template.bind({});
Warning.args = {
	value: 'Written text',
    variant: 'warning',
    icon: WarningIcon
};

export const Error = Template.bind({});
Error.args = {
	value: 'Written text',
    variant: 'error',
    icon: ErrorIcon
};
