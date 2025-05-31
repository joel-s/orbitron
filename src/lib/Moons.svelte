<script lang="ts">
  import '../app.css';
  import Moon from '$lib/Moon.svelte';
  import { moonState } from '$lib/moonState.svelte';
  import { switches } from '$lib/switchValues.svelte';

  let { index }: { index: number } = $props();

  const { count, offset, speed, size, color } = $derived(moonState[index]);
  const angle = $derived(360 / count);
  let iVals = $derived([...Array(count).keys()]);
  let circleBorder = $derived(switches.revealWheels && offset > 0 ? '1px solid var(--retro9)' : 'none');
</script>

<div class="center" style="animation: rotateAnimation {120 / speed}s linear infinite">
  <div class="circle" style="width: {2 * offset}vmin; height: {2 * offset}vmin; border: {circleBorder};"></div>
  {#each iVals as iVal (iVal)}
    <Moon {index} {offset} angle={angle * iVal} {size} {color} />
  {/each}
</div>

<style>
  .center {
    width: 0;
    height: 0;
    position: absolute;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
</style>
