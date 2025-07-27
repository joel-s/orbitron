<script>
  import NumericInput from '$lib/input-table/NumericInput.svelte';
  import ColorInput from '$lib/input-table/ColorInput.svelte';
  import { getFirstDisabledRow, moonState } from '$lib/moonState.svelte.js';
  import { switches } from '$lib/switchValues.svelte.js';
  import PresetInput from '$lib/input-table/PresetInput.svelte';
  import CopyToClipboard from '$lib/input-table/CopyToClipboard.svelte';
  import RestartButton from '$lib/input-table/RestartButton.svelte';
  import ExponentSlider from '$lib/input-table/ExponentSlider.svelte';
  import GithubLogo from '$lib/assets/github-mark.svg';

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
            <NumericInput level={i} name="count" bind:value={moon.count} disabled={!i} />
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
          <div class="tooltip tooltip-bottom" data-tip="Copy table to clipboard">
            <CopyToClipboard />
          </div>
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
        <th class="toggle-color" colspan="3">Ratio Exponent</th>
        <th class="github">GitHub</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>&nbsp;</th>
        <td class="preset">
          <input type="checkbox" name="toggle-c" bind:checked={switches.exponential} class="toggle preset" />
        </td>
        <td colspan="3" class="toggle-color">
          <ExponentSlider />
        </td>
        <td class="github">
          <a href="https://github.com/joel-s/orbitron">
            <img src={GithubLogo} width={25} alt="GitHub" />
          </a>
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

  .copy-button,
  .github {
    color: var(--retro8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
