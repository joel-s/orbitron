<script lang="ts">
  import '../app.css';
  import Moons from '$lib/Moons.svelte';
  import { moonState } from '$lib/moonState.svelte';
  import { switches } from '$lib/switchValues.svelte';

  let { index, angle, offset, size, color } = $props();

  const colors = [
    '#001219',
    '#005f73',
    '#0a9396',
    '#94d2bd',
    '#e9d8a6',
    '#ee9b00',
    '#ca6702',
    '#bb3e03',
    '#ae2012',
    '#9b2226',
  ];

  const colorName = $derived(colors[color]);
  const lineBackground = $derived(switches.revealSpokes && offset > 0 ? 'var(--retro6)' : 'none');
</script>

<div class="origin" style:transform="rotateZ({angle}deg)">
  <div class="line" style="height: {offset}vmin; background: {lineBackground}"></div>
  <div class="offset" style:transform="translateY(-{offset}vmin)">
    <div class="ball" style:width="{size}vmin" style:height="{size}vmin" style:background-color={colorName}></div>
    {#if index < moonState.length - 1}
      <Moons index={index + 1} />
    {/if}
  </div>
</div>

<style>
  .origin {
    position: absolute;
    width: 0;
    height: 0;
  }

  .line {
    position: absolute;
    bottom: 0;
    width: 1px;
    background-color: var(--retro8);
    z-index: -100;
  }

  .ball {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
</style>
