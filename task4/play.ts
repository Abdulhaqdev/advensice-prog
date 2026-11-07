import { GameCharacter } from "./hero.ts";
import { CharacterFactory } from "./maker.ts";

export class GameRunner {
  static main(): void {
    const asl = new GameCharacter(4, "Temur", 8, "Shamshir");
    const eslabQolish = asl.toString();
    const fabrika = new CharacterFactory(asl);

    const birinchi = fabrika.cloneCharacter();
    const ikkinchi = fabrika.cloneCharacter();

    birinchi.setId(5);
    birinchi.setName("Bobur");
    birinchi.setLevel(14);
    birinchi.setWeapon("O'q-yoy");

    ikkinchi.setId(6);
    ikkinchi.setName("Jaloliddin");
    ikkinchi.setLevel(21);
    ikkinchi.setWeapon("Sopqi");

    console.log("Asl qahramon:", asl.toString());
    console.log("1-nusxa:", birinchi.toString());
    console.log("2-nusxa:", ikkinchi.toString());
    console.log("asl va 1-nusxa bitta obyektmi?", asl === birinchi);
    console.log("ikki nusxa bitta obyektmi?", birinchi === ikkinchi);
    console.log("asl o'zgarmaganmi?", asl.toString() === eslabQolish);
  }
}
