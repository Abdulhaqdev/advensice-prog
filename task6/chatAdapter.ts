import type { NotificationService } from "./api.ts";
import { TelegramClient } from "./chat.ts";

export class TelegramAdapter implements NotificationService {
  private client: TelegramClient;

  constructor(client: TelegramClient) {
    this.client = client;
  }

  send(recipient: string, message: string): void {
    this.client.sendTelegramMessage(recipient, message);
  }
}
