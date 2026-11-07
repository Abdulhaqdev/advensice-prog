import { Cafe, ComboCafe } from "./cafe.ts";
import {
  LatteFactory,
  TeaFactory,
  CoffeeComboFactory,
  TeaComboFactory,
} from "./makers.ts";

console.log("--- oddiy buyurtma ---");
new Cafe(new LatteFactory()).order();
new Cafe(new TeaFactory()).order();

console.log("--- kombo buyurtma ---");
new ComboCafe(new CoffeeComboFactory()).orderCombo();
new ComboCafe(new TeaComboFactory()).orderCombo();
