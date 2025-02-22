import {Controller} from "../controller";
import {Router} from "express";
import {TaleService} from "./tale.service";
import {TaleRequest} from "./tale.request";


export class TaleController implements Controller {
  router = Router();

  constructor(private tale: TaleService) {
    this.router.post("/story/text", (req, res) => this.storyText(req.body).then(u => res.json(u)));
    this.router.post("/story/audio", this.getStory);
  }

  storyText = (r: TaleRequest) => this.tale.storyText(r);
  getStory = async (req, res) => {
    const audio = await this.tale.storyAudio(req.body.text)
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'inline; filename="audio.mp3"');
    audio.pipe(res);
  }
}

