<script>
  import NumericInput from '$lib/input-table/NumericInput.svelte';
  import ColorInput from '$lib/input-table/ColorInput.svelte';
  import { moonState } from '$lib/moonState.svelte.js';
</script>

<!--{JSON.stringify(moonState)}-->
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
        <th>{i + 1}</th>
        <td><NumericInput bind:value={moon.count} /></td>
        <td><NumericInput bind:value={moon.offset} /></td>
        <td><NumericInput bind:value={moon.speed} /></td>
        <td><NumericInput bind:value={moon.size} /></td>
        <td><ColorInput bind:value={moon.color} /></td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    padding: 1rem;
  }
  th,
  td {
    color: var(--retro4);
    padding: 0.3rem 0.3rem;
  }
</style>
