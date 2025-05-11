<script lang="ts">
	import Moon from '$lib/Moon.svelte';

	const nMoons = 3;
	const angle = 360 / nMoons;
	let iVals = [...Array(nMoons).keys()];
</script>

<style>
    .page {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .center {
				width: 0;
				height: 0;
        position: absolute;
        animation: rotateAnimation 10s linear infinite;
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

<div class="page">
	<div class="center">
		{#each iVals as iVal (iVal)}
			<Moon size={5} angle={angle * iVal} offset={30} />
		{/each}
	</div>
</div>
