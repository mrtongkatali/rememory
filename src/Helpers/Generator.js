import { faker } from '@faker-js/faker';
import { DIFFICULTY_ENUM } from '@/Data/settings.js';

export const generatePool = (size, category) => {
  const uniqueDataGenerator = (generatorFunction) => {
    const uniqueData = new Set();
    const MAX_ATTEMPTS = size * 10;

    for (let i = 0; i < MAX_ATTEMPTS && uniqueData.size < size; i++) {
      uniqueData.add(generatorFunction());
    }

    if (uniqueData.size < size) {
      throw new Error('Unable to generate enough unique values');
    }

    return Array.from(uniqueData);
  };

  const numberGenerator = (minNumber = 1, maxNumber = 40) => {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  };

  let categories = [];

  const MEDIUM_POOL_CATEGORIES = [faker.music.songName, faker.word.adjective];

  const HARD_POOL_CATEGORIES = [
    faker.animal.bird,
    faker.animal.cat,
    faker.animal.cetacean,
    faker.animal.cow,
    faker.animal.dog,
    faker.animal.fish,
    faker.animal.horse,
    faker.animal.insect,
  ];

  switch (category) {
    case DIFFICULTY_ENUM.EASY:
      categories = numberGenerator;
      break;
    case DIFFICULTY_ENUM.MEDIUM:
      categories = MEDIUM_POOL_CATEGORIES[numberGenerator(0, 1)];
      break;
    default:
      categories = HARD_POOL_CATEGORIES[numberGenerator(0, 7)];
      break;
  }

  return uniqueDataGenerator(() => categories());

  //   if (category === DIFFICULTY_ENUM.EASY) {
  //     //
  //   }
};
