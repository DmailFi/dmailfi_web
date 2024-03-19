import nodemailer from 'nodemailer';
import type { Attachment } from 'nodemailer/lib/mailer';

export class Mailer {
	private transporter: nodemailer.Transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD
			}
		});
	}

async sendMail(
    to: string,
    subject: string,
    text: string,
    html?: string,
    attachments?: Attachment[]
) {
		const mailOptions: nodemailer.SendMailOptions = {
			from: process.env.EMAIL,
			to,
			subject,
			text,
			html,
			attachments
		};

		try {
			await this.transporter.sendMail(mailOptions);
		} catch (error) {
			console.error(`Failed to send email: ${error}`);
			throw error;
		}
	}
}
