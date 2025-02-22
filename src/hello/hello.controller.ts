import {Controller} from "../controller";
import {Router} from "express";
import {HelloService} from "./hello.service";

export class HelloController implements Controller {
  router = Router();

  constructor(private service: HelloService) {
    this.router.get("/", (_, res) => this.get().then(u => res.json(u)));
  }

  get = () => this.service.sayHello()
}

