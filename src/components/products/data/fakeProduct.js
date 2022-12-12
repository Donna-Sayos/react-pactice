const { faker } = require("@faker-js/faker");

const products = [
  {
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.fashion(500, 500),
  },
];

function createRandomProducts() {
  return {
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.fashion(500, 500, Math.ceil(Math.random() * 49)),
  };
};

Array.from({ length: 50 }).forEach(() => products.push(createRandomProducts()));