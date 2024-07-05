const DIFFICULTY_ENUM = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

const SIZE_ENUM = {
  FOUR_FOUR: 1,
  FIVE_FIVE: 2,
  SIX_SIX: 3,
  SEVEN_SEVEN: 4,
  EIGHT_EIGHT: 5,
};

export const DIFFICULTY_SETTINGS = [
  {
    id: DIFFICULTY_ENUM.EASY,
    name: 'Easy',
    pool: [],
  },
  {
    id: DIFFICULTY_ENUM.MEDIUM,
    name: 'Medium',
    categories: [],
  },
  {
    id: DIFFICULTY_ENUM.HARD,
    name: 'Hard',
    categories: [],
  },
];

export const SIZE_SETTINGS = [
  {
    id: SIZE_ENUM.FOUR_FOUR,
    name: '4x4',
  },
  {
    id: SIZE_ENUM.FIVE_FIVE,
    name: '5x5',
  },
  {
    id: SIZE_ENUM.SIX_SIX,
    name: '6x6',
  },
  {
    id: SIZE_ENUM.SEVEN_SEVEN,
    name: '7x7',
  },
  {
    id: SIZE_ENUM.EIGHT_EIGHT,
    name: '8x8',
  },
];
