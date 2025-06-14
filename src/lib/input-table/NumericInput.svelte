<script lang="ts">
  let {
    level,
    name,
    value = $bindable(),
    disabled = false,
  }: { level: number; name: string; value: number; disabled?: boolean } = $props();
</script>

<input type="number" name="level-{level}-{name}" class="input w-18" bind:value {disabled} min="0" />
