import {PostE, PostType} from 'types/posts';
import randomEnum from 'utils/common/randomEnum';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

const getHomePosts = () => {
  const i = 100;
    return new Array(i).fill(i).map(
      () =>
          ({
              title: faker.lorem.sentence(),
              source: faker.image.image(),
              type: randomEnum(PostE),
              description: faker.lorem.paragraphs(),
          } as PostType)
  );
};

export default getHomePosts;
