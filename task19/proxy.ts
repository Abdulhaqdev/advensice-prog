import type { BankAccount } from "./account.ts";
import type { RealBankAccount } from "./realAccount.ts";

export class BankAccountProxy implements BankAccount {
  private account: RealBankAccount;
  private loggedIn: boolean;

  constructor(account: RealBankAccount, loggedIn: boolean) {
    this.account = account;
    this.loggedIn = loggedIn;
  }

  login(): void {
    this.loggedIn = true;
    console.log("Foydalanuvchi tizimga kirdi");
  }

  withdraw(amount: number): void {
    console.log(`Pul yechish urinishi: ${amount}`);

    if (!this.loggedIn) {
      console.log("Operatsiya taqiqlandi: foydalanuvchi tizimga kirmagan");
      return;
    }

    console.log("Avtorizatsiya tasdiqlandi, pul yechishga ruxsat berildi");
    this.account.withdraw(amount);
  }
}
