export const DIFFICULTY_ENUM = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

export const SIZE_ENUM = {
  FOUR_FOUR: 1,
  SIX_SIX: 2,
  EIGHT_EIGHT: 3,
};

export const DIFFICULTY_SETTINGS = [
  {
    value: DIFFICULTY_ENUM.EASY,
    label: 'Easy',
  },
  {
    value: DIFFICULTY_ENUM.MEDIUM,
    label: 'Medium',
  },
  {
    value: DIFFICULTY_ENUM.HARD,
    label: 'Hard',
  },
];

export const SIZE_SETTINGS = [
  {
    id: SIZE_ENUM.FOUR_FOUR,
    label: '4x4',
    value: 4,
    gridSettings: {
      repeat: 4,
      gap: '20px',
      height: '120px',
    },
  },
  {
    id: SIZE_ENUM.SIX_SIX,
    label: '6x6',
    value: 6,
    gridSettings: {
      repeat: 8,
      gap: '15px',
      height: '120px',
    },
  },
  {
    id: SIZE_ENUM.EIGHT_EIGHT,
    label: '8x8',
    value: 8,
    gridSettings: {
      repeat: 16,
      gap: '10px',
      height: '100px',
    },
  },
];
