import { faker } from '@faker-js/faker';
import { DIFFICULTY_ENUM } from '@/Data/settings.js';

export const generatePool = (size, category) => {
  const uniqueDataGenerator = (newSize, generatorFunction) => {
    const uniqueData = new Set();
    const MAX_ATTEMPTS = 1000;

    // while (uniqueData.size < size) {
    //   uniqueData.add(generatorFunction());
    // }

    for (let i = 0; i < MAX_ATTEMPTS && uniqueData.size < size; i++) {
      uniqueData.add(generatorFunction());
    }

    if (uniqueData.size < size) {
      throw new Error('Unable to generate enough unique values');
    }

    return Array.from(uniqueData);
  };

  const EASY_POOL_CATEGORIES = [faker.music.songName, faker.word.adjective];

  const MEDIUM_POOL_CATEGORIES = [
    faker.animal.bird,
    faker.animal.cat,
    faker.animal.cetacean,
    faker.animal.cow,
    faker.animal.dog,
    faker.animal.fish,
    faker.animal.horse,
    faker.animal.insect,
  ];

  const HARD_POOL_CATEGORIES = [
    faker.number.float({ min: 10, max: 100, multipleOf: 0.02 }),
  ];

  return uniqueDataGenerator(size, () => MEDIUM_POOL_CATEGORIES[0]());

  //   if (category === DIFFICULTY_ENUM.EASY) {
  //     //
  //   }
};
