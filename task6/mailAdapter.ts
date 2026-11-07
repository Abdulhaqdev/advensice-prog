import type { NotificationService } from "./api.ts";
import { EmailClient } from "./mail.ts";

export class EmailAdapter implements NotificationService {
  private client: EmailClient;
  private subject: string;

  constructor(client: EmailClient, subject: string) {
    this.client = client;
    this.subject = subject;
  }

  send(recipient: string, message: string): void {
    this.client.sendEmail(recipient, this.subject, message);
  }
}
