import { GameCharacter } from "./hero.ts";

export class CharacterFactory {
  private andoza: GameCharacter;

  constructor(prototype: GameCharacter) {
    this.andoza = prototype;
  }

  setCharacter(prototype: GameCharacter): void {
    this.andoza = prototype;
  }

  cloneCharacter(): GameCharacter {
    return this.andoza.clone();
  }
}
