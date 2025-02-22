import {GoogleGenerativeAI} from "@google/generative-ai";
import {config} from "../src/utils/config";
import {GeminiService} from "../src/gemini/gemini.service";
import {fal} from "@fal-ai/client";

const gemini = new GoogleGenerativeAI(config.GEMINI_KEY)

const req = {"lesson": "Courage", "age": 7, "elements": ["Princesses"], "name": "Some"}
const geminiService = new GeminiService(gemini)
// geminiService.generate(JSON.stringify(req)).then(console.log)

fal.config({ credentials: config.FAL_KEY });

fal.subscribe('fal-ai/recraft-v3', {
  input: {
    prompt: "dadasdsa".slice(0, 400),
    style: 'digital_illustration',
    image_size: {
      width: 512,
      height: 512
    }
  }
}).then(r => r.data.images[0].url).then(console.log);