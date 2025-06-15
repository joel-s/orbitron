<script>
  import NumericInput from '$lib/input-table/NumericInput.svelte';
  import ColorInput from '$lib/input-table/ColorInput.svelte';
  import { getFirstDisabledRow, moonState } from '$lib/moonState.svelte.js';
  import { switches } from '$lib/switchValues.svelte.js';
  import PresetInput from '$lib/input-table/PresetInput.svelte';
  import CopyToClipboard from '$lib/input-table/CopyToClipboard.svelte';
  import RestartButton from '$lib/input-table/RestartButton.svelte';
  import ExponentSlider from '$lib/input-table/ExponentSlider.svelte';

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
            <NumericInput level={i} name="count" bind:value={moon.count} isCount disabled={!i} />
          </td>
          <td>
            <NumericInput level={i} name="dist" bind:value={moon.dist} disabled={!i || i >= firstDisabledRow} />
          </td>
          <td>
            <NumericInput level={i} name="speed" bind:value={moon.speed} disabled={!i || i >= firstDisabledRow} />
          </td>
          <td>
            <NumericInput level={i} name="size" bind:value={moon.size} disabled={i >= firstDisabledRow} />
          </td>
          <td>
            <ColorInput level={i} bind:value={moon.color} disabled={i >= firstDisabledRow} />
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
        <th class="restart">Restart</th>
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
        <td class="restart">
          <RestartButton />
        </td>
        <td>
          <input type="checkbox" name="toggle-a" bind:checked={switches.revealWheels} class="toggle toggle-color" />
        </td>
        <td>
          <input type="checkbox" name="toggle-b" bind:checked={switches.revealSpokes} class="toggle toggle-color" />
        </td>
        <td class="copy-button">
          <CopyToClipboard />
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>&nbsp;</th>
      </tr>
      <tr>
        <th></th>
        <th class="preset">Auto</th>
        <th class="toggle-color" colspan="4">Ratio Exponent</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>&nbsp;</th>
        <td class="preset">
          <input type="checkbox" name="toggle-c" bind:checked={switches.exponential} class="toggle preset" />
          <!--          <div class="mt-2 flex justify-between px-2.5 text-xs text-transparent">0</div>-->
        </td>
        <td colspan="4" class="toggle-color">
          <ExponentSlider />
          <!--          <div class="mt-2 flex justify-between px-2.5 text-xs">-->
          <!--            <span>-4</span>-->
          <!--            <span>-2</span>-->
          <!--            <span>0</span>-->
          <!--            <span>&nbsp;2</span>-->
          <!--            <span>&nbsp;4</span>-->
          <!--          </div>-->
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

  .restart {
    color: var(--retro6);
  }

  .toggle-color,
  .toggle-text {
    color: var(--retro7);
  }

  .copy-button {
    color: var(--retro8);
  }
</style>
