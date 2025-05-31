<script lang="ts">
  let { value = $bindable(), disabled } = $props();
</script>

<input type="number" class="input w-18" bind:value min="0" max="9" step="1" {disabled} />
