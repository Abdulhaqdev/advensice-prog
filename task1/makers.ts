import type { Drink } from "./drinks.ts";
import { Latte, Tea } from "./drinks.ts";
import type { Dessert } from "./sweets.ts";
import { Cake, Cookie } from "./sweets.ts";

export interface DrinkFactory {
  createDrink(): Drink;
}

export class LatteFactory implements DrinkFactory {
  createDrink(): Drink {
    return new Latte();
  }
}

export class TeaFactory implements DrinkFactory {
  createDrink(): Drink {
    return new Tea();
  }
}

export interface CafeFactory {
  createDrink(): Drink;
  createDessert(): Dessert;
}

export class CoffeeComboFactory implements CafeFactory {
  createDrink(): Drink {
    return new Latte();
  }

  createDessert(): Dessert {
    return new Cake();
  }
}

export class TeaComboFactory implements CafeFactory {
  createDrink(): Drink {
    return new Tea();
  }

  createDessert(): Dessert {
    return new Cookie();
  }
}
