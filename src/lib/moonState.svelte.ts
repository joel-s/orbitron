import type { MoonSpec } from '$lib/MoonSpec';

// Find out which rows should be disabled based on first count that is 0
export function getFirstDisabledRow(): number {
  const firstZero = moonState.findIndex((value) => value.count === 0);
  return firstZero === -1 ? 999 : firstZero;
}

export const presets: MoonSpec[][] = [
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 3, offset: 16, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 16, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 8, speed: 4, size: 0, color: 4 },
    { count: 3, offset: 8, speed: 4, size: 5, color: 4 },
    { count: 0, offset: 8, speed: 4, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 3, offset: 20, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 20, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 10, speed: 4, size: 5, color: 4 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 3, offset: 15, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 15, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 15, speed: 4, size: 5, color: 1 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 3, offset: 20, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 20, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 10, speed: 4, size: 5, color: 4 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 3, offset: 20, speed: 5, size: 0, color: 0 },
    { count: 3, offset: 10, speed: 10, size: 0, color: 0 },
    { count: 3, offset: 5, speed: 20, size: 5, color: 1 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 25.6, color: 1 },
    { count: 3, offset: 32, speed: 4, size: 6.4, color: 2 },
    { count: 3, offset: 8, speed: 4, size: 1.6, color: 3 },
    { count: 3, offset: 2, speed: 4, size: 0.4, color: 4 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 4, offset: 16, speed: 4, size: 0, color: 0 },
    { count: 4, offset: 16, speed: 4, size: 0, color: 0 },
    { count: 4, offset: 16, speed: 4, size: 5, color: 4 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 4, offset: 16, speed: 2, size: 0, color: 0 },
    { count: 4, offset: 16, speed: 4, size: 0, color: 0 },
    { count: 4, offset: 4, speed: 8, size: 0, color: 0 },
    { count: 4, offset: 4, speed: 16, size: 2, color: 4 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 6, offset: 20, speed: 4, size: 0, color: 0 },
    { count: 3, offset: 20, speed: 4, size: 0, color: 0 },
    { count: 6, offset: 10, speed: 4, size: 6, color: 3 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
    { count: 0, offset: 0, speed: 0, size: 0, color: 0 },
  ],
];

export const moonState = $state<MoonSpec[]>(presets[0]);
