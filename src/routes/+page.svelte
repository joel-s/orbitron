<script lang="ts">
  import Moons from '$lib/Moons.svelte';
  import InputTable from '$lib/input-table/InputTable.svelte';
  import SiteName from '$lib/SiteName.svelte';
</script>

<div class="page">
  <div class="control-panel">
    <div class="name">
      <h1>
        <SiteName />
      </h1>
    </div>
    <div class="inputTable">
      <InputTable />
    </div>
  </div>

  <div class="screen">
    <div class="moons-origin">
      <Moons index={0} />
    </div>
  </div>
</div>

<style>
  .page {
    width: 100vw;
    height: 100vmin;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .control-panel {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: fit-content;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .name {
    width: fit-content;
    text-align: center;
    margin: 2rem auto;

    h1 {
      font-size: 4rem;
      letter-spacing: 0.2em;
    }
  }

  .inputTable {
    width: fit-content;
  }

  .screen {
    width: min(60vw, 100vh);
    height: 100vh;
    z-index: -999;
  }

  .moons-origin {
    width: 0;
    height: 0;
    margin: 50vh auto;
  }
</style>
