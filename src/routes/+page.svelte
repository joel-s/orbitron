<script lang="ts">
  import type { MoonSpec } from '$lib/MoonSpec';
  import Moons from '$lib/Moons.svelte';
  import InputTable from '$lib/input-table/InputTable.svelte';

  const moonSpecs: MoonSpec[] = [
    { count: 3, offset: 20, size: 0 },
    { count: 3, offset: 20, size: 0 },
    { count: 3, offset: 10, size: 5, color: '#fff' }
  ];
</script>

<div class="page">
  <div class="overlay">
    <InputTable />
  </div>
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

  .overlay {
    position: absolute;
    top: 4rem;
    left: 4rem;
    width: fit-content;
  }
</style>
