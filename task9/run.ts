import { World } from "./world.ts";

const world = new World();

world.addBlock(0, 0, 0, "Grass");
world.addBlock(1, 0, 0, "Grass");
world.addBlock(2, 0, 0, "Stone");
world.addBlock(3, 0, 0, "Grass");
world.addBlock(4, 0, 0, "Dirt");

world.render();

const blocks = world.getBlocks();
const [firstGrass, , stone, secondGrass, dirt] = blocks;

console.log("--- Havola tekshiruvi (===) ---");
console.log("Grass === Grass:", firstGrass.type === secondGrass.type);
console.log("Grass === Stone:", firstGrass.type === stone.type);
console.log("Stone === Dirt:", stone.type === dirt.type);
