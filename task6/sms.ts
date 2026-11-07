import type { NotificationService } from "./api.ts";

export class SmsNotificationService implements NotificationService {
  send(recipient: string, message: string): void {
    console.log(`SMS qabul qiluvchi ${recipient}. Matn: ${message}`);
  }
}
