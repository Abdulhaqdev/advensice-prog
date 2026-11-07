export class TelegramClient {
  sendTelegramMessage(chatId: string, text: string): void {
    console.log(`Telegram chat=${chatId}, matn="${text}"`);
  }
}
