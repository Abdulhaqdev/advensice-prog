import { FlightBooking } from "./flight.ts";
import { HotelBooking } from "./hotel.ts";
import { Payment } from "./payment.ts";

export class TravelFacade {
  private flight = new FlightBooking();
  private hotel = new HotelBooking();
  private payment = new Payment();

  bookTrip(from: string, to: string, date: string, hotel: string, nights: number, amount: number): void {
    console.log("--- Sayohat bron qilinmoqda ---");
    this.flight.book(from, to, date);
    this.hotel.book(hotel, nights);
    this.payment.pay(amount);
    console.log("Sayohat muvaffaqiyatli bron qilindi");
  }

  cancelTrip(): void {
    console.log("--- Sayohat bekor qilinmoqda ---");
    this.flight.cancel();
    this.hotel.cancel();
    this.payment.refund();
    console.log("Sayohat bekor qilindi, to'lov qaytarildi");
  }
}
