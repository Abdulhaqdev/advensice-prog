export interface Dessert {
  name(): string;
}

export class Cake implements Dessert {
  name(): string {
    return "Mevali tort";
  }
}

export class Cookie implements Dessert {
  name(): string {
    return "Shokoladli pechene";
  }
}
