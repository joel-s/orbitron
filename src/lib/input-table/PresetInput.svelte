<script lang="ts">
  import { moonState, presets } from '$lib/moonState.svelte';

  function handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const presetNum = Number(inputElement.value);
    if (presetNum >= 0 && presetNum < presets.length) {
      moonState.forEach((_, index, theArray) => {
        theArray[index] = presets[presetNum][index];
      });
    }
  }
</script>

<input
  type="number"
  class="input w-14"
  oninput={handleInputChange}
  min="0"
  max={presets.length - 1}
  step="1"
  value="0"
/>
