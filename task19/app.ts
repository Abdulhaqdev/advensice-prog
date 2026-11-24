import { RealBankAccount } from "./realAccount.ts";
import { BankAccountProxy } from "./proxy.ts";

export class BankApp {
  start(): void {
    const account = new RealBankAccount(1000);
    const proxy = new BankAccountProxy(account, false);

    console.log("--- Tizimga kirmagan holda ---");
    proxy.withdraw(200);

    proxy.login();

    console.log("--- Tizimga kirgan holda ---");
    proxy.withdraw(200);
    proxy.withdraw(900);
  }
}
