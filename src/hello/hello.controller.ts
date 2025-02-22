import {Controller} from "../controller";
import {Router} from "express";
import {HelloService} from "./hello.service";
import {TaleService} from "../tale/tale.service";


export class HelloController implements Controller {
  router = Router();

  constructor(private service: HelloService, private tale: TaleService) {
    this.router.get("/", (_, res) => this.get().then(u => res.json(u)));
    this.router.post("/story", this.getStory);
  }

  get = () => this.service.sayHello()

  getStory = async (req, res) => {
    const audio = await this.tale.generate(req.body)
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'inline; filename="audio.mp3"');

    // Przekaż strumień audio do odpowiedzi
    audio.pipe(res);
  }
}

