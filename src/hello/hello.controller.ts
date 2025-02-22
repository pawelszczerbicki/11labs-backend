import {Controller} from "../controller";
import {Router} from "express";
import {HelloService} from "./hello.service";
import {ElevenLabsClient} from "elevenlabs";
import * as stream from "stream";
import {config} from "../utils/config";


export class HelloController implements Controller {
  router = Router();

  constructor(private service: HelloService) {
    this.router.get("/", (_, res) => this.get().then(u => res.json(u)));
    this.router.get("/story", this.getStory);
  }

  get = () => this.service.sayHello()

  getStory = async (_, res) => {
    const client = new ElevenLabsClient({apiKey: config.ELEVEN_LABS_KEY});

    const audio: stream.Readable = await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
      text: "The first move is what sets everything in motion.",
      model_id: "eleven_multilingual_v2",
      output_format: "mp3_44100_128",
    });
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'inline; filename="audio.mp3"');

    // Przekaż strumień audio do odpowiedzi
    audio.pipe(res);
  }
}

