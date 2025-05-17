import type { MoonSpec } from '$lib/MoonSpec';

export const moonState = $state<MoonSpec[]>([
  { count: 3, offset: 20, size: 0 },
  { count: 3, offset: 20, size: 0 },
  { count: 3, offset: 10, size: 5, color: '#fff' }
]);
