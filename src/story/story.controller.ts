import {Controller} from "../controller";
import {Router} from "express";
import {StoryService} from "./story.service";
import {Story} from "./story";


export class StoryController implements Controller {
  router = Router();

  constructor(private tale: StoryService) {
    this.router.post("/story", (req, res) => this.save(req.body).then(u => res.json(u)));
    this.router.get("/story", (req, res) => this.getAll().then(u => res.json(u)));
    this.router.get("/story/:id", (req, res) => this.getById(req.params.id).then(u => res.json(u)));
    this.router.delete("/story/:id", (req, res) => this.delete(req.params.id).then(() => res.sendStatus(204)));
  }

  save = (s: Story) => this.tale.save(s);

  getAll = () => this.tale.getAll();

  getById = (id: string) => this.tale.get(id);

  delete = (id: string) => this.tale.delete(id);
}

