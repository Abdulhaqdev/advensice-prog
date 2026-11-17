import { TravelFacade } from "./facade.ts";

const sayohat = new TravelFacade();

sayohat.bookTrip("Toshkent", "Istanbul", "2026-12-01", "Grand Hotel", 5, 4_500_000);
sayohat.cancelTrip();
