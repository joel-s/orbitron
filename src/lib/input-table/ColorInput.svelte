<script lang="ts">
  let { level, value = $bindable(), disabled } = $props();
</script>

<input type="number" name="level-{level}-color" class="input w-18" bind:value min="0" max="9" step="1" {disabled} />
