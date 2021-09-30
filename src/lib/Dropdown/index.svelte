<script>
    import IconChevron from '../_assets/icon_chevron-down.svg';

    /**
	 * Items to display as options
	 */
	export let items = [];

    /**
	 * Size input to full width
	 */
	export let fullwidth = false;

    /**
	 * Dropdown disabled
	 */
	export let disabled = false;

    /**
	 * AriaLable for accesibility
	 */
	export let ariaLable = 'Choose an element:';

    /**
	 * Placeholder when no option is selected
	 */
     export let placeholder = '';

    /**
	 * The selected item
	 */
     export let selected = undefined;

    /**
	 * Option to remove the selected item
	 */
     export let removeSelected = null;

    /**
	 * Add unique aria-dropdown-lable
	 */
     export let num = 0;


    let expanded = false;
    let button;
    let listbox;

    num = num + 1;
    const idNumber = num;

    $: index = items.indexOf(selected);

    const expand = () => {
        if (disabled) return;
        expanded = !expanded;
    };

    const resetSelectedValue = () => {
        selected = null;
        expanded = false;
        button.focus();
    };

</script>

<p class='hidden' id='aria-dropdown-lable{idNumber}'>
    {ariaLable}
</p>
<div class='relative {fullwidth ? 'w-full' : 'w-fullt sm:w-input'}'>
    <button
        bind:this={button}
        on:click={expand}
        id='aria-dropdown-button{idNumber}'
        type='button'
        disabled={disabled}
        aria-labelledby='aria-dropdown-lable{idNumber} aria-dropdown-button{idNumber}'
        aria-haspopup='listbox'
        aria-expanded={expanded}
        class='outline-none border-b border-solid border-t border-l border-r 
        border-gray-500 bg-form-100 rounded-sm w-full px-6 py-4 text-sm cursor-pointer select-none 
        list-none flex items-center justify-start -mt-px'
    >
        <span class='flex-1 text-left  {disabled && 'text-gray-500 cursor-default'}'>
            {selected || placeholder}
        </span>
        <img src={IconChevron} alt='chevron down' class={disabled && 'opacity-40 '}/>
    </button>
    <div class='relative'>
        <ul
            on:blur={() => expanded = false}
            on:keydown|preventDefault={(e) => {
            if (e.key === 'Enter' ||e.key === 'Esc' || e.key === 'Escape') {
                expanded = false;
                button.focus();
                return;
            }
            
            switch (e.key) {
                case 'ArrowUp':
                selected = items[index === 0 ? 0 : index - 1];
                break;
                case 'ArrowDown':
                selected = items[index === items.length - 1 ? index : index + 1];
                break;
                case 'Home':
                selected = items[0];
                break;
                case 'End':
                selected = items[items.length - 1];
                break;
            }
            }}
            bind:this={listbox}
            id='aria-dropdown-list{idNumber}'
            role='listbox'
            aria-labelledby='aria-dropdown-lable{idNumber}'
            tabindex='-1'
            aria-activedescendant='aria-dropdown-option{idNumber}-{index}'
            class='border-r border-l border-b border-gray-500 bg-form-100 rounded-sm w-full absolute z-50 
            top-full left-0 right-0 max-h-72 overflow-y-auto p-0 m-0
            {!expanded && 'hidden'}'
        >
            {#if removeSelected && selected !== undefined}
                <li 
                    on:click={resetSelectedValue}
                    class='hover:bg-white hover:text-black px-6 py-4 text-sm cursor-pointer 
                    select-none list-none flex items-center justify-start -mt-px mb-0'
                >
                    {removeSelected}
                </li>
            {/if}
            {#each items.filter(x => x !== selected) as item, i}
                <li on:click={() => {
                    selected = item;
                    expanded = false;
                    button.focus();}} 
                    class='hover:bg-white hover:text-black px-6 py-4 text-sm cursor-pointer 
                    select-none list-none flex items-center justify-start -mt-px mb-0'
                    id='aria-dropdown-option{idNumber}-{i}'
                    aria-selected={item === selected}
                    role='option'
                >
                    {item}
                </li>
            {/each}
        </ul>
    </div>
</div>