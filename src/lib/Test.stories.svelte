<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Test from './Test.svelte';
	import "./styles/tailwind.css";
</script>

<Meta title="Toggle" component={Test} argTypes={{
    title: { control: "text" },
  }} />
  
<Template let:args>
	<Test {...args} on:click={args.onClick} />
</Template>

<Story name="Default" />
