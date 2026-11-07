import { Document } from "./doc.ts";
import { DocumentFactory } from "./maker.ts";

const asl = new Document(
  10,
  "Labaratoriya",
  "Kimyo darsi yozuvi",
  "Malika Karimova",
  ["dars", "kimyo"]
);
const eslabQolish = asl.toString();
const fabrika = new DocumentFactory(asl);

const birinchi = fabrika.cloneDocument();
birinchi.setId(11);
birinchi.setTitle("Referat");
birinchi.setContent("Tarix referati");
birinchi.getTags()[0] = "muhim";
birinchi.getTags().push("tarix");

const ikkinchi = fabrika.cloneDocument();
ikkinchi.setId(12);
ikkinchi.setTitle("Eslatma");
ikkinchi.setContent("Imtihon sanalari");
ikkinchi.getTags().push("imtihon");

console.log("Asl hujjat:", asl.toString());
console.log("1-nusxa:", birinchi.toString());
console.log("2-nusxa:", ikkinchi.toString());
console.log("asl va nusxa bitta obyektmi?", asl === birinchi);
console.log("teglar umumiy ro'yxatmi?", asl.getTags() === birinchi.getTags());
console.log("nusxalar tegi umumiy ro'yxatmi?", birinchi.getTags() === ikkinchi.getTags());
console.log("asl o'zgarmaganmi?", asl.toString() === eslabQolish);
