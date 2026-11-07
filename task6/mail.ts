export class EmailClient {
  sendEmail(emailAddress: string, subject: string, body: string): void {
    console.log(`Email ${emailAddress}, mavzu="${subject}", matn="${body}"`);
  }
}
