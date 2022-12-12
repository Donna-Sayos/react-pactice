import { v4 as uuidv4 } from "uuid";
const { faker } = require("@faker-js/faker");

export const fakeProducts = [
  {
    id: uuidv4(),
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.fashion(500, 500),
  },
];

function createRandomProducts() {
  return {
    id: uuidv4(),
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 2000),
    img: faker.image.fashion(500, 500, Math.ceil(Math.random() * 49)),
  };
}

Array.from({ length: 50 }).forEach(() =>
  fakeProducts.push(createRandomProducts())
);
