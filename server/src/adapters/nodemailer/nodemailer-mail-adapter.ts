import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f34f91c80aa66",
    pass: "d28b75f3baa3ef",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@fidget.com>",
      to: "Adriano <surerloki3379@gmail.com>",
      subject,
      html: body,
    });
  }
}
