<script>
    /**
     * Native button disabled
     */
    export let disabled = false

    /**
     * Native button binded value
     */
    export let value = ''

    /**
     * Size button to full width
     */
    export let fullwidth = false

    /**
     * ID for connecting with label
     */
    export let id = ''
</script>

<input {disabled}
       class={`p-4 bg-form-100
       border-dark-100 border-2 rounded-sm focus:border-primary-500 outline-none disabled:text-dark-500
       ${fullwidth && `w-full`}

    `}
       type="text"
       bind:value
       {id}>