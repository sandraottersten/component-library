<script>
  /**
   * Set flex direction in box container
   */
  export let direction = 'row'

  /**
   * Set to `true` to center content vertically and horizontally
   */
  export let center = false

  /**
   * Wrap content (flex-wrap)
   */
  export let wrap = false

  /**
   * Set a background color
   */
  export let backgroundColor

  /**
   * Set width (css property)
   */
  export let width = '100%'

  /**
   * set height (css property)
   */
  export let height = '100%'

  /**
   * Set spacing (padding top bottom)
   */
  export let spacing = '1rem'

  /**
   * set indent (padding left right)
   */
  export let indent = '1rem'

  /**
   * set margin (css property)
   */
  export let margin = '0'
</script>

<div
  style={`background-color: ${backgroundColor}; width: ${width}; height: ${height}; padding: ${spacing} ${indent}; margin: ${margin}`}
  class={`
    flex
    ${wrap && `flex-wrap`}
    ${direction === `column` && `flex-col`}
    ${center && `justify-center items-center`}
    `}
>
  <slot />
</div>
