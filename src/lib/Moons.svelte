<script lang="ts">
  import '../app.css';
  import Moon from '$lib/Moon.svelte';
  import { moonState } from '$lib/moonState.svelte';
  import { switches } from '$lib/switchValues.svelte';

  let { index }: { index: number } = $props();

  const { count, dist, speed, size, color } = $derived(moonState[index]);
  const angle = $derived(360 / count);
  let iVals = $derived([...Array(count).keys()]);
  let circleBorder = $derived(switches.revealWheels && dist > 0 ? '1px solid var(--retro9)' : 'none');

  $effect(() => {
    const centralAnim = document.querySelector('#rotate-level-1')?.getAnimations()?.[0];
    if (centralAnim) {
      document.getAnimations().forEach((anim) => {
        anim.startTime = centralAnim.startTime;
        anim.play();
      });
    }
  });
</script>

<div
  class="center"
  id="rotate-level-{index}"
  style="animation: rotateAnimation {speed ? 120 / speed : 0}s linear infinite"
>
  {#if iVals.length}
    <div class="circle" style="width: {dist}vmin; height: {dist}vmin; border: {circleBorder};"></div>
  {/if}
  {#each iVals as iVal (iVal)}
    <Moon {index} {dist} angle={angle * iVal} {size} {color} />
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
