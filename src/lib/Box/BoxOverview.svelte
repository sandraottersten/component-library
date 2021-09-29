<script>
  import Box from './index.svelte'
</script>

<Box backgroundColor="#daf">
  <p>Box!</p>
  <Box backgroundColor="#fad" spacing="2rem" indent="6rem"
    ><p>Inner Box #1 with spacing, indent 3</p>
    <p>Inner Box #1 with spacing, indent 3</p>
    <p>Inner Box #1 with spacing, indent 3</p>
    <Box backgroundColor="#adf" indent="4rem" direction="column"
      ><p>Inner Box #2 with column</p>
      <p>Inner Box #2 with column</p>
      <p>Inner Box #2 with column</p>
      <Box backgroundColor="undefined" spacing="2rem" direction="column" center
        ><p>Inner Box #3 with transparent bg, centered</p>
        <p>Inner Box #3 with transparent bg, centered</p>
        <p>Inner Box #3 with transparent bg, centered</p>
      </Box>
    </Box>
  </Box>
</Box>
