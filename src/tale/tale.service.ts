import {TaleRequest} from "./tale.request";
import {GeminiService} from "../gemini/gemini.service";
import {ElevenLabsClient} from "elevenlabs";

export class TaleService {

  constructor(private gemini: GeminiService, private elevenLabs: ElevenLabsClient) {
  }

  storyText = (r: TaleRequest) => this.gemini.generate(JSON.stringify(r)).then(r => JSON.parse(r));
  storyAudio = (r: string) => this.elevenLabs.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
    text: r,
    model_id: "eleven_multilingual_v2",
    output_format: "mp3_44100_128",
  })
}