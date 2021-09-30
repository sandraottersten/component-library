<script>
    import Dropdown from "./index.svelte"

    const items = ['Option 1', 'Option 2', 'Option 3']
    const selected = 'Option 2'
    
</script>

<main class="flex">
    <section>
        <h3>Default</h3>
        <div class="px-6 py-4">
            <h4>Normal</h4>
            <Dropdown
                {items}
                placeholder="Choose an option"
            />
        </div>  
        <div class="px-6 py-4">
            <h4>Disabled</h4>
            <Dropdown 
                {items}
                disabled={true}
                placeholder="Choose an option"
            />
        </div>  
        <div class="px-6 py-4">
            <h4>With initial selected option</h4>
            <Dropdown
                {items}
                {selected}
            />
        </div>  
        <div class="px-6 py-4">
            <h4>With removeSelected option</h4>
            <Dropdown
                {items}
                placeholder="Choose an option"
                removeSelected="All options"
            />
        </div>  
    </section>
</main>
