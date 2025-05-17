<script>
  import NumericInput from '$lib/input-table/NumericInput.svelte';
</script>

<table>
  <thead>
    <tr>
      <th>Orbit</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Radius</td>
      <td><NumericInput /></td>
      <td><NumericInput /></td>
      <td><NumericInput /></td>
    </tr>
    <tr>
      <td>Moons</td>
      <td><NumericInput /></td>
      <td><NumericInput /></td>
      <td><NumericInput /></td>
    </tr>
    <tr>
      <td>Size</td>
      <td><NumericInput /></td>
      <td><NumericInput /></td>
      <td><NumericInput /></td>
    </tr>
    <tr>
      <td>Color</td>
    </tr>
  </tbody>
</table>

<style>
  table {
    padding: 1rem;
  }
  th,
  td {
    padding: 0.3rem 0.3rem;
  }
</style>
