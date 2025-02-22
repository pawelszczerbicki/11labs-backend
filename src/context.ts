import {Controller} from "./controller";
import {Mongo} from "./db/mongo";
import {HelloController} from "./hello/hello.controller";
import {HelloService} from "./hello/hello.service";
import {GoogleGenerativeAI} from "@google/generative-ai";
import {ElevenLabsClient} from "elevenlabs";
import {config} from "./utils/config";
import {GeminiService} from "./gemini/gemini.service";
import {TaleService} from "./tale/tale.service";
import {TaleController} from "./tale/tale.controller";
import {StoryController} from "./story/story.controller";
import {StoryService} from "./story/story.service";
import {KidController} from "./kid/kid.controller";
import {KidService} from "./kid/kid.service";

export let mongo: Mongo;
if (!mongo)
  mongo = new Mongo()

const elevenLabsClient = new ElevenLabsClient({apiKey: config.ELEVEN_LABS_KEY});
const gemini = new GoogleGenerativeAI(config.GEMINI_KEY)

const geminiService = new GeminiService(gemini)
const taleService = new TaleService(geminiService, elevenLabsClient)

export const publicControllers = [
  new HelloController(new HelloService()),
  new TaleController(taleService),
  new StoryController(new StoryService(mongo)),
  new KidController(new KidService(mongo)),
].map((c: Controller) => c.router);
