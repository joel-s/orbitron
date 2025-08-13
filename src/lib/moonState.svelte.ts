import type { MoonSpec } from '$lib/MoonSpec';

// Find out which rows should be disabled based on first count that is 0
export function getFirstDisabledRow(): number {
  const firstZero = moonState.findIndex((value) => value.count === 0);
  return firstZero === -1 ? 999 : firstZero;
}

export const presets: MoonSpec[][] = [
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 3, dist: 32, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 32, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 16, speed: 4, size: 0, color: 4 },
    { count: 3, dist: 16, speed: 4, size: 5, color: 4 },
    { count: 0, dist: 16, speed: 4, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 3, dist: 40, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 40, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 20, speed: 4, size: 5, color: 4 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 3, dist: 30, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 30, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 30, speed: 4, size: 5, color: 1 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 3, dist: 40, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 40, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 20, speed: 4, size: 5, color: 4 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 3, dist: 40, speed: 5, size: 0, color: 0 },
    { count: 3, dist: 20, speed: 10, size: 0, color: 0 },
    { count: 3, dist: 10, speed: 20, size: 5, color: 1 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 25.6, color: 1 },
    { count: 3, dist: 64, speed: 4, size: 6.4, color: 2 },
    { count: 3, dist: 16, speed: 4, size: 1.6, color: 3 },
    { count: 3, dist: 4, speed: 4, size: 0.4, color: 4 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 4, dist: 32, speed: 4, size: 0, color: 0 },
    { count: 4, dist: 32, speed: 4, size: 0, color: 0 },
    { count: 4, dist: 32, speed: 4, size: 5, color: 4 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 4, dist: 32, speed: 2, size: 0, color: 0 },
    { count: 4, dist: 32, speed: 4, size: 0, color: 0 },
    { count: 4, dist: 8, speed: 8, size: 0, color: 0 },
    { count: 4, dist: 8, speed: 16, size: 2, color: 4 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 6, dist: 40, speed: 4, size: 0, color: 0 },
    { count: 3, dist: 40, speed: 4, size: 0, color: 0 },
    { count: 6, dist: 20, speed: 4, size: 6, color: 3 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 0, dist: 0, speed: 0, size: 0, color: 0 },
  ],
  [
    // From Ben
    { count: 1, dist: 0, speed: 0, size: 3, color: 9 },
    { count: 4, dist: 42, speed: 5, size: 1, color: 1 },
    { count: 15, dist: 22, speed: 4, size: 2, color: 2 },
    { count: 1, dist: 16, speed: 4, size: 1, color: 5 },
    { count: 0, dist: 16, speed: 4, size: 5, color: 4 },
    { count: 0, dist: 16, speed: 4, size: 0, color: 0 },
  ],
  [
    // From Ben
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 3, dist: 52, speed: 4, size: 0, color: 0 },
    { count: 9, dist: 24, speed: 4, size: 0, color: 0 },
    { count: 1, dist: 16, speed: 4, size: 0, color: 4 },
    { count: 1, dist: 16, speed: 4, size: 5, color: 4 },
    { count: 0, dist: 16, speed: 4, size: 0, color: 0 },
  ],
  [
    // From Maria Johnsenberg
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 13, dist: 37, speed: 13, size: 1, color: 1 },
    { count: 3, dist: 37, speed: 7, size: 1, color: 1 },
    { count: 3, dist: 13, speed: 3, size: 1, color: 1 },
    { count: 3, dist: 13, speed: 17, size: 5, color: 1 },
    { count: 0, dist: 16, speed: 4, size: 0, color: 0 },
  ],
  [
    // From Dad
    { count: 1, dist: 0, speed: 0, size: 0, color: 0 },
    { count: 4, dist: 32, speed: 4, size: 0, color: 0 },
    { count: 5, dist: 32, speed: 4, size: 0, color: 0 },
    { count: 1, dist: 23, speed: 4, size: 0, color: 4 },
    { count: 70, dist: 29, speed: 4, size: 1, color: 2 },
    { count: 0, dist: 16, speed: 4, size: 0, color: 0 },
  ],
];

export const moonState = $state<MoonSpec[]>(presets[0]);
