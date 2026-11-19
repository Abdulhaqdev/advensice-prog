export class BlockType {
  readonly name: string;
  readonly texture: string;
  readonly color: string;

  constructor(name: string, texture: string, color: string) {
    this.name = name;
    this.texture = texture;
    this.color = color;
  }
}
