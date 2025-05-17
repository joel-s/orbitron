<script lang="ts">
  import '../app.css';
  import Moons from '$lib/Moons.svelte';
  import { moonState } from '$lib/moonState.svelte';

  let { index, angle, offset, size, color } = $props();
</script>

<div class="origin" style:transform="rotateZ({angle}deg) translateY(-{offset}vmin)">
  <div
    class="ball"
    style:width="{size}vmin"
    style:height="{size}vmin"
    style:background-color={color}
  >
    {#if index < moonState.length - 1}
      <Moons {moonState} index={index + 1} />
    {/if}
  </div>
</div>

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
