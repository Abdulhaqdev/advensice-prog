import type { DrinkFactory, CafeFactory } from "./makers.ts";

export class Cafe {
  private factory: DrinkFactory;

  constructor(factory: DrinkFactory) {
    this.factory = factory;
  }

  order(): void {
    const drink = this.factory.createDrink();
    console.log("Buyurtma berildi:", drink.name());
  }
}

export class ComboCafe {
  private factory: CafeFactory;

  constructor(factory: CafeFactory) {
    this.factory = factory;
  }

  orderCombo(): void {
    const drink = this.factory.createDrink();
    const dessert = this.factory.createDessert();
    console.log("Kombo buyurtma:", drink.name(), "va", dessert.name());
  }
}
