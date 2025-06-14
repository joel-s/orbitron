<script lang="ts">
  import { switches } from '$lib/switchValues.svelte.js';
  import { getFirstDisabledRow, moonState } from '$lib/moonState.svelte.js';

  function getOffset(r0: number, n: number, kMin: number, kMax: number) {
    let sum = n ** (kMin - 1);
    for (let k = kMin; k < kMax; k++) {
      sum += 2 ** (k - kMin) * n ** k;
    }
    return sum * r0;
  }

  function oninput(event: Event) {
    const target = event.target as HTMLInputElement;
    const n = 2 ** Number(target.value);
    const firstDisabledRow = getFirstDisabledRow();
    const r0 = (80 * (1 - 2 * n)) / (1 - (2 * n) ** firstDisabledRow);

    moonState.forEach((state, index) => {
      if (index < firstDisabledRow) {
        state.size = r0 * n ** index;
        if (index > 0) {
          state.offset = getOffset(r0, n, index, firstDisabledRow);
        }
      }
    });
  }
</script>

<input type="range" min="-3" max="3" value="0" class="range" step="0.1" {oninput} disabled={!switches.exponential} />
