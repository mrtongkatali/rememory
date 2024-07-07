export const DIFFICULTY_ENUM = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

export const SIZE_ENUM = {
  FOUR_FOUR: 4,
  FIVE_FIVE: 5,
  SIX_SIX: 6,
  SEVEN_SEVEN: 7,
  EIGHT_EIGHT: 8,
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
    label: '6x6',
    value: SIZE_ENUM.SIX_SIX,
    gridSettings: {
      repeat: 9,
      gap: '15px',
      height: '100px',
    },
  },
  {
    id: SIZE_ENUM.EIGHT_EIGHT,
    label: '8x8',
    value: 8,
    gridSettings: {
      repeat: 16,
      gap: '5px',
      height: '100px',
    },
  },
];
