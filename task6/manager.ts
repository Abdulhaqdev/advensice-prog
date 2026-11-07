import type { NotificationService } from "./api.ts";

export class NotificationManager {
  private service: NotificationService;

  constructor(service: NotificationService) {
    this.service = service;
  }

  setService(service: NotificationService): void {
    this.service = service;
  }

  notify(recipient: string, message: string): void {
    this.service.send(recipient, message);
  }
}
