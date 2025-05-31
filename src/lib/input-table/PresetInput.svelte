<script lang="ts">
  import { moonState, presets } from '$lib/moonState.svelte';
  import { restartAnimations } from '$lib/animation';

  function handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const presetNum = Number(inputElement.value);
    if (presetNum >= 0 && presetNum < presets.length) {
      moonState.forEach((_, index, theArray) => {
        theArray[index] = presets[presetNum][index];
      });
    }
    restartAnimations();
  }
</script>

<input
  type="number"
  name="global-preset"
  class="input w-18"
  oninput={handleInputChange}
  min="0"
  max={presets.length - 1}
  step="1"
  value="0"
/>
