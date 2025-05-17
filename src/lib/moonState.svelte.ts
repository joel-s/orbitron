import type { MoonSpec } from '$lib/MoonSpec';

export const moonState = $state<MoonSpec[]>([
  { count: 3, offset: 20, speed: 4, size: 0 },
  { count: 3, offset: 20, speed: 4, size: 0 },
  { count: 3, offset: 10, speed: 4, size: 5, color: '#fff' }
]);

export const moonSpec1 = $state<MoonSpec[]>([
  { count: 3, offset: 15, size: 0, speed: 4 },
  { count: 3, offset: 15, size: 0, speed: 4 },
  { count: 3, offset: 15, size: 5, speed: 4, color: '#fff' }
]);

export const moonSpec2 = [
  { count: 3, offset: 20, speed: 5, size: 0 },
  { count: 3, offset: 10, speed: 10, size: 0 },
  { count: 3, offset: 5, speed: 20, size: 5, color: '#fff' }
];
