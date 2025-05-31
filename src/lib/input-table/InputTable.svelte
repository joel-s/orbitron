<script>
  import NumericInput from '$lib/input-table/NumericInput.svelte';
  import ColorInput from '$lib/input-table/ColorInput.svelte';
  import { getFirstDisabledRow, moonState } from '$lib/moonState.svelte.js';
  import { switches } from '$lib/switchValues.svelte.js';
  import PresetInput from '$lib/input-table/PresetInput.svelte';
  import CopyToClipboard from '$lib/input-table/CopyToClipboard.svelte';

  let firstDisabledRow = $derived(getFirstDisabledRow());
</script>

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
            <NumericInput bind:value={moon.count} disabled={!i} />
          </td>
          <td>
            <NumericInput bind:value={moon.offset} disabled={!i || i >= firstDisabledRow} />
          </td>
          <td>
            <NumericInput bind:value={moon.speed} disabled={!i || i >= firstDisabledRow} />
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
    <thead>
      <tr>
        <th>&nbsp;</th>
      </tr>
      <tr>
        <th></th>
        <th class="preset">Preset</th>
        <th></th>
        <th class="toggle-text">A</th>
        <th class="toggle-text">B</th>
        <th class="copy-button">Copy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>&nbsp;</th>
        <td class="preset">
          <PresetInput />
        </td>
        <td></td>
        <td>
          <input type="checkbox" bind:checked={switches.revealWheels} class="toggle" />
        </td>
        <td>
          <input type="checkbox" bind:checked={switches.revealSpokes} class="toggle" />
        </td>
        <td class="copy-button">
          <CopyToClipboard />
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  table {
    padding: 1rem;
  }

  th,
  td {
    color: var(--retro4);
    padding: 0.3rem 0.3rem;
    text-align: center;
  }

  .preset {
    color: var(--retro5);
  }

  .toggle,
  .toggle-text {
    color: var(--retro6);
  }

  .copy-button {
    color: var(--retro7);
  }
</style>
