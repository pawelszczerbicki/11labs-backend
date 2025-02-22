import {Controller} from "./controller";
import {Mongo} from "./db/mongo";
import {config} from "./utils/config";
import {MailService} from "@sendgrid/mail";
import {HelloController} from "./hello/hello.controller";
import {HelloService} from "./hello/hello.service";

export let mongo: Mongo;
if (!mongo)
  mongo = new Mongo()
const sendgrid = new MailService()
sendgrid.setApiKey(config.SENDGRID_API_KEY);


export const controllers = [].map((c: Controller) => c.router);

export const publicControllers = [
  new HelloController(new HelloService()),
].map((c: Controller) => c.router);
