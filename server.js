import { Chance } from "chance";
import { createServer } from "node:http";

export const server = createServer((request, response) => {
  const chance = new Chance();
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});
