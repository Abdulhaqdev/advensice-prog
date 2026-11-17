export class HotelBooking {
  private booked = false;
  private stay = "";

  book(hotel: string, nights: number): void {
    this.booked = true;
    this.stay = `${hotel}, ${nights} kecha`;
    console.log(`Mehmonxona xonasi bron qilindi: ${this.stay}`);
  }

  cancel(): void {
    if (!this.booked) {
      console.log("Bekor qilinadigan mehmonxona bron yo'q");
      return;
    }

    console.log(`Mehmonxona bron bekor qilindi: ${this.stay}`);
    this.booked = false;
    this.stay = "";
  }
}
