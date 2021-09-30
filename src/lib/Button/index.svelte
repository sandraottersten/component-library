<script>
    /**
     * Native button disabled
     */
    export let disabled = false
  
    /** @type {"primary" | "secondary" | "ghost"} */
    /**
     * Button variant
     */
    export let variant = 'primary'
  
    /** @type {"large" | "small" } */
    /**
     * Size of button, predefined sizes
     */
    export let size = 'large'
  
    /**
     * add custom style classes to button
     */
    export let className = ''
  
    /**
     * Button label if no inner content provided
     */
    export let label = 'Button'
  
    /**
     * Size button to full width
     */
    export let fullwidth = false
  </script>
  
  <button
    on:click
    {disabled}
    class={`flex justify-center items-center p-4 rounded-full focus:outline-none text-md whitespace-nowrap
      ${fullwidth && `w-full`}
      ${size === 'large' && `h-14 min-w-buttonLarge px-6`}
      ${size === 'small' && `h-11 min-w-buttonSmall px-6`}
      ${
        variant === 'primary' &&
        `bg-primary-500 hover:bg-primary-900 focus:ring-4 focus:ring-primary-100 focus:bg-primary-500
        disabled:bg-primary-100 text-white`
      }
      ${
        variant === 'secondary' &&
        `bg-transparent text-primary-500 border-primary-500 hover:border-primary-900 hover:text-primary-900 
        focus:border-primary-500 focus:text-primary-500 focus:ring-4 focus:ring-primary-100 focus:bg-transparent 
        disabled:bg-transparent disabled:border-primary-100 disabled:text-primary-100 border-2`
      }
      ${
        variant === 'ghost' &&
        `bg-transparent border-gray-500 focus:ring-4 focus:ring-gray-300
        text-gray-500 hover:text-primary-900 hover:border-gray-500 focus:text-primary-900
        disabled:bg-transparent disabled:border-gray-500 disabled:text-gray-500 border-2`
      }
      ${className && className}
      shadow-md disabled:shadow-none`}
  >
    <slot>
      {label}
    </slot>
  </button>