import { NotificationManager } from "./manager.ts";
import { SmsNotificationService } from "./sms.ts";
import { TelegramClient } from "./chat.ts";
import { TelegramAdapter } from "./chatAdapter.ts";
import { EmailClient } from "./mail.ts";
import { EmailAdapter } from "./mailAdapter.ts";

const matn = "To'lov muvaffaqiyatli o'tdi";
const boshqaruvchi = new NotificationManager(new SmsNotificationService());

boshqaruvchi.notify("+998931112233", matn);
boshqaruvchi.setService(new TelegramAdapter(new TelegramClient()));
boshqaruvchi.notify("99887766", matn);
boshqaruvchi.setService(new EmailAdapter(new EmailClient(), "To'lov xati"));
boshqaruvchi.notify("student@mail.uz", matn);
