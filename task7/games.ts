import type { Developer } from "./devs.ts";

export class Game {
  protected developer: Developer;

  constructor(developer: Developer) {
    this.developer = developer;
  }

  setDeveloper(developer: Developer): void {
    this.developer = developer;
  }

  create(): void {
    throw new Error("Bu o'yin turi hali yozilmagan");
  }
}

export class RacingGame extends Game {
  create(): void {
    console.log(`Poyga o'yini yaratildi. ${this.developer.writeCode()}`);
  }
}

export class FootballGame extends Game {
  create(): void {
    console.log(`Futbol o'yini yaratildi. ${this.developer.writeCode()}`);
  }
}
