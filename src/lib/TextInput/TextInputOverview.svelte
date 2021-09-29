<script>
    import TextInput from "./index.svelte"

    let value = ""
</script>

<main class="flex">
    <TextInput bind:value disabled={false}/>
</main>
