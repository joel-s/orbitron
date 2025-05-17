<script lang="ts">
  let { value = $bindable() } = $props();
</script>

<input type="number" class="input w-14" bind:value />
