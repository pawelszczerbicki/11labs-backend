import {MailService} from '@sendgrid/mail'
import {EmailType} from "./email";
import {logger} from "../utils/logger";


export class EmailService {
  constructor(private sendgrid: MailService) {
  }

  send = (type: EmailType, to: string, vars?: any) => this.sendgrid.send({
    to: to,
    from: {email: "fitness@apphangry.com", name: 'Fitness app'},
    templateId: type,
    dynamicTemplateData: vars,
  }).catch((e: any) => logger.error(e.response?.body?.errors))
}