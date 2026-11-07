import type { Copyable } from "./clone.ts";

export class GameCharacter implements Copyable<GameCharacter> {
  private id: number;
  private name: string;
  private level: number;
  private weapon: string;

  constructor(id: number, name: string, level: number, weapon: string) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.weapon = weapon;
  }

  static from(source: GameCharacter): GameCharacter {
    return new GameCharacter(
      source.getId(),
      source.getName(),
      source.getLevel(),
      source.getWeapon()
    );
  }

  clone(): GameCharacter {
    return GameCharacter.from(this);
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getLevel(): number {
    return this.level;
  }

  setLevel(level: number): void {
    this.level = level;
  }

  getWeapon(): string {
    return this.weapon;
  }

  setWeapon(weapon: string): void {
    this.weapon = weapon;
  }

  toString(): string {
    return `id=${this.id}, ism=${this.name}, daraja=${this.level}, qurol=${this.weapon}`;
  }
}
