<script>
	import Button from './index.svelte';
</script>

<main class="flex">
	<section>
		<h3>Primary</h3>
		<div class="p-6">
			<Button on:click={() => console.log('button click handler working')} size="large">
				Large
			</Button>
		</div>
		<div class="p-6">
			<Button on:click={() => console.log('button click handler working')} size="small">
				Small
			</Button>
		</div>
		<p>Disabled</p>
		<div class="p-6">
			<Button on:click={() => console.log('button click handler working')} disabled>
				Disabled
			</Button>
		</div>
	</section>
  
	<section>
		<h3>Secondary</h3>
		<div class="p-6">
			<Button
				on:click={() => console.log('button click handler working')}
				size="large"
				variant="secondary">
				Large
			</Button>
		</div>
		<div class="p-6">
			<Button
				on:click={() => console.log('button click handler working')}
				size="small"
				variant="secondary">
				Small
			</Button>
		</div>
		<p>Disabled</p>
		<div class="p-6">
			<Button
				on:click={() => console.log('button click handler working')}
				disabled
				variant="secondary">
				Disabled
			</Button>
		</div>
	</section>

	<section>
		<h3>Ghost</h3>
		<div class="p-6">
			<Button
				on:click={() => console.log('button click handler working')}
				size="large"
				variant="ghost">
				Large
			</Button>
		</div>
		<div class="p-6">
			<Button
				on:click={() => console.log('button click handler working')}
				size="small"
				variant="ghost">
				Small
			</Button>
		</div>
		<p>Disabled</p>
		<div class="p-6">
			<Button on:click={() => console.log('button click handler working')} disabled variant="ghost">
				Disabled
			</Button>
		</div>
	</section>
</main>
