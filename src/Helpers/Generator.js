import { faker } from '@faker-js/faker';
import { DIFFICULTY_ENUM } from '@/Data/settings.js';

export const generatePool = (size, category) => {
  const uniqueDataGenerator = (generatorFunction) => {
    const uniqueData = new Set();

    while (uniqueData.size < size) {
      uniqueData.add(generatorFunction());
    }

    return Array.from(uniqueData);
  };

  return uniqueDataGenerator(() => faker.animal.bear());

  //   if (category === DIFFICULTY_ENUM.EASY) {
  //     //
  //   }
};
