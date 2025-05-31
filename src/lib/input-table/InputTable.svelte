<script>
  import NumericInput from '$lib/input-table/NumericInput.svelte';
  import ColorInput from '$lib/input-table/ColorInput.svelte';
  import { getFirstDisabledRow, moonState } from '$lib/moonState.svelte.js';
  import { switches } from '$lib/switchValues.svelte.js';
  import PresetInput from '$lib/input-table/PresetInput.svelte';

  function copyToClipboard() {
    navigator.clipboard.writeText(JSON.stringify(moonState)).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  }

  let firstDisabledRow = $derived(getFirstDisabledRow());
</script>

<div class="switches">
  <label class="label">
    <input type="checkbox" bind:checked={switches.revealWheels} class="toggle" />
    <!--Reveal-->
  </label>
</div>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Preset</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>&nbsp;</th>
      <td>
        <PresetInput />
      </td>
      <td>
        <input type="checkbox" bind:checked={switches.revealWheels} class="toggle" />
      </td>
      <td>
        <input type="checkbox" bind:checked={switches.revealSpokes} class="toggle" />
      </td>
    </tr>
  </tbody>
</table>

<div class="flex flex-row items-end">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Count</th>
        <th>Dist.</th>
        <th>Speed</th>
        <th>Size</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      {#each moonState as moon, i (i)}
        <tr>
          <th>{i}</th>
          <td>
            <NumericInput bind:value={moon.count} />
          </td>
          <td>
            <NumericInput bind:value={moon.offset} disabled={i >= firstDisabledRow} />
          </td>
          <td>
            <NumericInput bind:value={moon.speed} disabled={i >= firstDisabledRow} />
          </td>
          <td>
            <NumericInput bind:value={moon.size} disabled={i >= firstDisabledRow} />
          </td>
          <td>
            <ColorInput bind:value={moon.color} disabled={i >= firstDisabledRow} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <button
    type="button"
    onclick={copyToClipboard}
    class="btn btn-square copy-button mx-4"
    aria-label="Copy to clipboard"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#ca6702"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3"
      />
    </svg>
  </button>
</div>

<style>
  .switches {
    margin: 1.7rem;
  }

  label,
  .toggle {
    color: var(--retro2);
  }

  table {
    padding: 1rem;
  }

  th,
  td {
    color: var(--retro4);
    padding: 0.3rem 0.3rem;
  }

  .copy-button {
    padding: 1px;
    margin-bottom: 5.5px;
  }
</style>
