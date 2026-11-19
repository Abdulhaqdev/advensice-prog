import { Block } from "./block.ts";
import { BlockFactory } from "./factory.ts";

export class World {
  private blocks: Block[] = [];
  private factory = new BlockFactory();

  addBlock(x: number, y: number, z: number, typeName: string): void {
    const type = this.factory.getBlockType(typeName);
    this.blocks.push(new Block(x, y, z, type));
  }

  render(): void {
    console.log("--- Minecraft dunyoi ---");

    for (const block of this.blocks) {
      const { x, y, z, type } = block;
      console.log(
        `(${x}, ${y}, ${z}) ${type.name} | tekstura: ${type.texture} | rang: ${type.color}`,
      );
    }

    console.log(`Bloklar: ${this.blocks.length}`);
    console.log(`Noyob BlockType: ${this.factory.uniqueCount()}`);
  }

  getBlocks(): readonly Block[] {
    return this.blocks;
  }
}
