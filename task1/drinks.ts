export interface Drink {
  name(): string;
}

export class Latte implements Drink {
  name(): string {
    return "Sutli qahva";
  }
}

export class Tea implements Drink {
  name(): string {
    return "Qora choy";
  }
}
