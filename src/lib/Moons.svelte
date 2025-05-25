<script lang="ts">
  import '../app.css';
  import Moon from '$lib/Moon.svelte';
  import { moonState } from '$lib/moonState.svelte';

  let { index }: { index: number } = $props();

  const { count, offset, speed, size, color } = $derived(moonState[index]);
  const angle = $derived(360 / count);
  let iVals = $derived([...Array(count).keys()]);
</script>

<div class="center" style="animation: rotateAnimation {120 / speed}s linear infinite">
  <div class="circle" style:width="{2 * offset}vmin" style:height="{2 * offset}vmin"></div>
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
    /* border: 1px solid var(--retro9); */
    transform: translate(-50%, -50%);
  }
</style>
