<script lang="ts">
	import '../app.css';

	let { size, angle, offset } = $props();
</script>

<style>
    .ball {
        position: absolute;
        border-radius: 50%;
        background: #000;
    }
</style>

<div
	class="ball"
	style:width="{size}vmin"
	style:height="{size}vmin"
	style:transform="rotateZ({angle}deg) translateX({offset}vmin)"
></div>