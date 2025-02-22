import {Controller} from "./controller";
import {Mongo} from "./db/mongo";
import {HelloController} from "./hello/hello.controller";
import {HelloService} from "./hello/hello.service";
import {GoogleGenerativeAI} from "@google/generative-ai";
import {ElevenLabsClient} from "elevenlabs";
import {config} from "./utils/config";
import {GeminiService} from "./gemini/gemini.service";
import {TaleService} from "./tale/tale.service";

export let mongo: Mongo;
if (!mongo)
  mongo = new Mongo()

const elevenLabsClient = new ElevenLabsClient({apiKey: config.ELEVEN_LABS_KEY});
const gemini = new GoogleGenerativeAI(config.GEMINI_KEY)

const geminiService = new GeminiService(gemini)
const taleService = new TaleService(geminiService, elevenLabsClient)

export const publicControllers = [
  new HelloController(new HelloService(), taleService),
].map((c: Controller) => c.router);
