import { HttpClient } from "./http.ts";

function chopEt(sarlavha: string, sorov: string): void {
  console.log(sarlavha);
  console.log(sorov);
  console.log();
}

chopEt(
  "GET",
  new HttpClient()
    .setUri("kitob.local")
    .setPath("katalog")
    .get()
    .addHeader("Accept", "text/plain")
    .build()
);

chopEt(
  "POST",
  new HttpClient()
    .setUri("kitob.local")
    .setPath("/buyurtma")
    .post()
    .addHeader("Content-Type", "application/json")
    .addHeader("X-Student", "haq")
    .setBody('{"kitob":"Alpomish","dona":1}')
    .build()
);

chopEt(
  "DELETE",
  new HttpClient().setUri("kitob.local").setPath("/buyurtma/9").delete().build()
);

chopEt(
  "UPDATE",
  new HttpClient()
    .setUri("kitob.local")
    .setPath("/buyurtma/9")
    .update()
    .addHeader("Content-Type", "application/json")
    .setBody('{"dona":2}')
    .build()
);
