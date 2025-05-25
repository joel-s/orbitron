import type { MoonSpec } from '$lib/MoonSpec';

export const moonState = $state<MoonSpec[]>([
  { count: 3, offset: 20, speed: 4, size: 0, color: 0 },
  { count: 3, offset: 20, speed: 4, size: 0, color: 0 },
  { count: 3, offset: 10, speed: 4, size: 5, color: 4 }
]);

export const moonSpec1 = $state<MoonSpec[]>([
  { count: 3, offset: 15, size: 0, speed: 4, color: 0 },
  { count: 3, offset: 15, size: 0, speed: 4, color: 0 },
  { count: 3, offset: 15, size: 5, speed: 4, color: 1 }
]);

export const moonSpec2: MoonSpec[] = [
  { count: 3, offset: 20, speed: 5, size: 0, color: 0 },
  { count: 3, offset: 10, speed: 10, size: 0, color: 0 },
  { count: 3, offset: 5, speed: 20, size: 5, color: 1 }
];

export const moonSpec3: MoonSpec[] = [
  { count: 3, offset: 32, speed: 4, size: 6.4, color: 1 },
  { count: 3, offset: 8, speed: 4, size: 1.6, color: 2 },
  { count: 3, offset: 2, speed: 4, size: 0.4, color: 3 }
];
