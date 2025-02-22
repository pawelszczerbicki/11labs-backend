import {Controller} from "../controller";
import {Router} from "express";
import {HelloService} from "./hello.service";
import {ElevenLabsClient} from "elevenlabs";
import stream from "stream";
import {Storage} from "@google-cloud/storage";
import {config} from "../utils/config";

const bucket = "elevenlabs-hackaton-stories"

export class HelloController implements Controller {
  router = Router();

  constructor(private service: HelloService) {
    this.router.get("/", (_, res) => this.get().then(u => res.json(u)));
    this.router.get("/story", (_, res) => this.get().then(u => res.json(u)));
  }

  get = () => this.service.sayHello()

  getStory = async () => {
    const client = new ElevenLabsClient({apiKey: config.ELEVEN_LABS_KEY});

    const audio = await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
      text: "The first move is what sets everything in motion.",
      model_id: "eleven_multilingual_v2",
      output_format: "mp3_44100_128",
    });

    new Storage()
  }
}

