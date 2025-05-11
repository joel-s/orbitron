<script lang="ts">
	import '../app.css';
	import Moons from '$lib/Moons.svelte';

	let { moonSpecs, index, angle, offset, size, color } = $props();
</script>

<style>
    .origin {
        position: absolute;
        width: 0;
        height: 0;
    }

    .ball {
        position: absolute;
        border-radius: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>

<div
	class="origin"
	style:transform="rotateZ({angle}deg) translateY(-{offset}vmin)"
>
	<div
		class="ball"
		style:width="{size}vmin"
		style:height="{size}vmin"
		style:background-color={color}
	>
		{#if index < moonSpecs.length - 1}
			<Moons {moonSpecs} index={index+1} />
		{/if}
	</div>
</div>