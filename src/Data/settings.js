export const DIFFICULTY_ENUM = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

export const SIZE_ENUM = {
  FOUR_FOUR: 4,
  FOUR_NINE: 6,
  FOUR_SIXTEEN: 8,
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
    label: '4x4',
    value: SIZE_ENUM.FOUR_FOUR,
    gridSettings: {
      repeat: 4,
      gap: '20px',
      height: '120px',
    },
  },
  {
    label: '4x9',
    value: SIZE_ENUM.FOUR_NINE,
    gridSettings: {
      repeat: 9,
      gap: '15px',
      height: '100px',
    },
  },
  {
    id: SIZE_ENUM.FOUR_SIXTEEN,
    label: '4x16',
    value: 8,
    gridSettings: {
      repeat: 16,
      gap: '5px',
      height: '100px',
    },
  },
];
