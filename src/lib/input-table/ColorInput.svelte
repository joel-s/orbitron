<script lang="ts">
  let { value = $bindable() } = $props();
</script>

<input type="number" class="input w-14" bind:value min="0" max="9" step="1" />
