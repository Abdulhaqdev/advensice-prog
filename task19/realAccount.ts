import type { BankAccount } from "./account.ts";

export class RealBankAccount implements BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log(`Mablag' yetarli emas. Balans: ${this.balance}`);
      return;
    }

    this.balance -= amount;
    console.log(`Hisobdan ${amount} yechildi. Qolgan balans: ${this.balance}`);
  }
}
