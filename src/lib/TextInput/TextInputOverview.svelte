<script>
    import TextInput from "./index.svelte"
    import WarningIcon from '../_assets/icon_warning.svg';
    import ErrorIcon from '../_assets/icon_error.svg';

    let value = "Written text"
</script>

<main class="flex">
    <section>
        <h3>Default</h3>
        <div class="px-6 py-4">
            <h4>Normal</h4>
            <TextInput bind:value placeholder="Text example"/>
        </div>  
        <div class="px-6 py-4">
            <h4>Disabled</h4>
            <TextInput bind:value disabled={true} />
        </div>  
        <div class="px-6 py-4">
            <h4>Readonly</h4>
            <TextInput bind:value readonly={true}/>
        </div>  
    </section>
    <section>
        <h3>Variants</h3>
        <div class="px-6 py-4">
            <h4>Warning</h4>
            <TextInput bind:value variant="warning" icon={WarningIcon} />
        </div> 
        <div class="px-6 py-4">
            <h4>Error</h4>
            <TextInput bind:value variant="error" icon={ErrorIcon} />
        </div> 
    </section>
</main>
