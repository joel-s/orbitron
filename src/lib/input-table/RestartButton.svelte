<script lang="ts">
  import { restartAnimations } from '$lib/animation';
</script>

<button type="button" onclick={restartAnimations} class="btn w-18" style:color="inherit" aria-label="Copy to clipboard">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    aria-hidden="true"
    width="24"
    height="24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
</button>
