<script lang="ts">
  let { value = $bindable(), disabled = false }: { value: number; disabled?: boolean } = $props();
</script>

<input type="number" class="input w-14" bind:value {disabled} />
