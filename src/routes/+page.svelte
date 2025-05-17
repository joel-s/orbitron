<script lang="ts">
  import Moons from '$lib/Moons.svelte';
  import InputTable from '$lib/input-table/InputTable.svelte';
</script>

<div class="page">
  <div class="overlay">
    <InputTable />
  </div>
  <Moons index={0} />
</div>

<style>
  .page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
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
