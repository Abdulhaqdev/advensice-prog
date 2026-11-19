import type { BlockType } from "./blockType.ts";

export class Block {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly type: BlockType;

  constructor(x: number, y: number, z: number, type: BlockType) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.type = type;
  }
}
