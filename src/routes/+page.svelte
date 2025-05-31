<script lang="ts">
  import Moons from '$lib/Moons.svelte';
  import InputTable from '$lib/input-table/InputTable.svelte';
  import SiteName from '$lib/SiteName.svelte';
</script>

<div class="page">
  <div class="name">
    <h1>
      <SiteName />
    </h1>
  </div>
  <div class="inputTable">
    <InputTable />
  </div>
  <div class="shift-right">
    <Moons index={0} />
  </div>
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

  .name {
    position: absolute;
    top: 4rem;
    left: 4rem;
    width: fit-content;

    h1 {
      font-size: 4rem;
      letter-spacing: 0.2em;
    }
  }

  .inputTable {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    width: fit-content;
  }

  .shift-right {
    position: absolute;
    right: 0;
    width: 60vh;
  }
</style>
