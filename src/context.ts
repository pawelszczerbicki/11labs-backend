import {Controller} from "./controller";
import {Mongo} from "./db/mongo";
import {HelloController} from "./hello/hello.controller";
import {HelloService} from "./hello/hello.service";

export let mongo: Mongo;
if (!mongo)
  mongo = new Mongo()


export const controllers = [].map((c: Controller) => c.router);

export const publicControllers = [
  new HelloController(new HelloService()),
].map((c: Controller) => c.router);
