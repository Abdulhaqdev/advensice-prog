import { BlockType } from "./blockType.ts";

const LOOKUP: Record<string, { texture: string; color: string }> = {
  Grass: { texture: "grass.png", color: "yashil" },
  Stone: { texture: "stone.png", color: "kulrang" },
  Dirt: { texture: "dirt.png", color: "jigarrang" },
  Water: { texture: "water.png", color: "ko'k" },
};

export class BlockFactory {
  private types = new Map<string, BlockType>();

  getBlockType(name: string): BlockType {
    const saved = this.types.get(name);
    if (saved) {
      return saved;
    }

    const info = LOOKUP[name];
    if (!info) {
      throw new Error(`Noma'lum blok turi: ${name}`);
    }

    const created = new BlockType(name, info.texture, info.color);
    this.types.set(name, created);
    return created;
  }

  uniqueCount(): number {
    return this.types.size;
  }
}
