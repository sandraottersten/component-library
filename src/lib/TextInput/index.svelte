<script>
    /** @type {"default" | "warning" | "error"} */
    /**
     * Input variant
     */
    export let variant = 'default'

	/**
	 * Input disabled
	 */
	export let disabled = false;

	/**
	 * Input readonly
	 */
	export let readonly = false;

	/**
	 * Input required before submitting
	 */
	export let required = false;

    /**
	 * Placeholder for initial text
	 */
	export let placeholder = '';

	/**
	 * Input binded value
	 */
	export let value = '';

	/**
	 * Size input to full width
	 */
	export let fullwidth = false;

    /**
	 * Input icon
	 */
	export let icon = null;

    /**
	 * ID for connecting with label
	 */
	export let id = '';
    
</script>

<div class={`relative ${fullwidth ? `w-full` : `w-input`}`}>
    {#if variant !== 'default'}
        <img src={icon} alt="warning" class={`absolute right-4 z-10 top-1/2 transform -translate-y-1/2`}/>
    {/if}
    <input
        class={`py-4 pl-4 pr-12 bg-form-100 w-full
        border-2 rounded-sm  outline-none disabled:text-dark-500 
        ${variant === 'warning' && `border-warning focus:border-warning`}
        ${variant === 'error' && `border-error focus:border-error`}
        ${variant === 'default' && `border-dark-100 focus:border-primary-500`}
        `}
        type="text"
        bind:value
        {id}
        {placeholder}
        {disabled}
        {readonly}
        {required}
    />
</div>
