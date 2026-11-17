export class FlightBooking {
  private booked = false;
  private route = "";

  book(from: string, to: string, date: string): void {
    this.booked = true;
    this.route = `${from} -> ${to}, ${date}`;
    console.log(`Aviachipta bron qilindi: ${this.route}`);
  }

  cancel(): void {
    if (!this.booked) {
      console.log("Bekor qilinadigan aviachipta yo'q");
      return;
    }

    console.log(`Aviachipta bron bekor qilindi: ${this.route}`);
    this.booked = false;
    this.route = "";
  }
}
