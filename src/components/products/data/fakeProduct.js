const { faker } = require("@faker-js/faker");

export const fakeProducts = [
  {
    id: Math.ceil(Math.random() * 80),
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productAdjective(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.food(160, 160, Math.ceil(Math.random() * 50)),
  },
];

function createRandomProducts() {
  return {
    id: Math.ceil(Math.random() * 80),
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productAdjective(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.food(160, 160, Math.ceil(Math.random() * 50)),
  }
};

Array.from({ length: 50 }).forEach(() =>
  fakeProducts.push(createRandomProducts())
);