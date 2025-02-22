import {GoogleGenerativeAI} from "@google/generative-ai";
import {config} from "../src/utils/config";
import {GeminiService} from "../src/gemini/gemini.service";

const gemini = new GoogleGenerativeAI(config.GEMINI_KEY)

const req = {"lesson": "Courage", "age": 7, "elements": ["Princesses"], "name": "Some"}
const geminiService = new GeminiService(gemini)
geminiService.generate(JSON.stringify(req)).then(console.log)