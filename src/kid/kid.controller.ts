import {Controller} from "../controller";
import {Router} from "express";
import {KidService} from "./kid.service";
import {Kid} from "./kid";


export class StoryController implements Controller {
  router = Router();

  constructor(private kid: KidService) {
    this.router.post("/kid", (req, res) => this.save(req.body).then(u => res.json(u)));
    this.router.get("/kid", (req, res) => this.getById().then(u => res.json(u)));
  }

  save = (s: Kid) => this.kid.save(s);
  getById = () => this.kid.get();
}

