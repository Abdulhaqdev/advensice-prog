export class Payment {
  private paid = false;
  private amount = 0;

  pay(amount: number): void {
    this.paid = true;
    this.amount = amount;
    console.log(`To'lov amalga oshirildi: ${this.amount} so'm`);
  }

  refund(): void {
    if (!this.paid) {
      console.log("Qaytariladigan to'lov yo'q");
      return;
    }

    console.log(`To'lov qaytarildi: ${this.amount} so'm`);
    this.paid = false;
    this.amount = 0;
  }
}
