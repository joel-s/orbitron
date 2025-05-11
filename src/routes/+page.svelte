<script lang="ts">
  import type { MoonSpec } from '$lib/MoonSpec';
  import Moons from '$lib/Moons.svelte';

  const moonSpecs: MoonSpec[] = [
    { count: 3, offset: 20, size: 0 },
    { count: 3, offset: 20, size: 0 },
    { count: 3, offset: 10, size: 5, color: '#fff' }
  ];
</script>

<div class="page">
  <Moons {moonSpecs} index={0} />
</div>

<style>
  .page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
