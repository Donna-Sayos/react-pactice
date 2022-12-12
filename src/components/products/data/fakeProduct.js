const { faker } = require("@faker-js/faker");

export const fakeProducts = [
  {
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.fashion(50, 50),
  },
];

function createRandomProducts() {
  return {
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.fashion(200, 200, Math.ceil(Math.random() * 49)),
  };
}

Array.from({ length: 50 }).forEach(() =>
  fakeProducts.push(createRandomProducts())
);
