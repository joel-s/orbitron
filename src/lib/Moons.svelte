<script lang="ts">
	import '../app.css';
	import type { MoonSpec } from '$lib/MoonSpec';
	import Moon from '$lib/Moon.svelte';

	let { moonSpecs, index }: { moonSpecs: MoonSpec[], index: number } = $props();

	const { count, offset, size, color } = moonSpecs[index];
	const angle = 360 / count;
	let iVals = [...Array(count).keys()];
</script>

<style>
    .center {
        width: 0;
        height: 0;
        position: absolute;
        animation: rotateAnimation 30s linear infinite;
    }

    .circle {
        position: absolute;
        border-radius: 50%;
        /*border: 1px solid blue;*/
        transform: translate(-50%, -50%);
    }

    @keyframes rotateAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>

<div class="center">
	<div class="circle" style:width="{2*offset}vmin" style:height="{2*offset}vmin"
	></div>
	{#each iVals as iVal (iVal)}
		<Moon {moonSpecs} {index} {offset} angle={angle * iVal} {size} {color} />
	{/each}
</div>